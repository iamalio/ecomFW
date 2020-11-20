import React from 'react';
import './Order.css';
import moment from "moment";
import OrderProduct from "./OrderProduct";
import CurrencyFormat from "react-currency-format";

function Order({ order }) {
    return (
        <section className="order">
            <div className="order__details">
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order__id">
                <small>{order.id}</small>
            </p>
            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="order__total">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            /> 
            </div>
 
            {order.data.cartContents?.map(item => (
                <OrderProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                />
            ))} 
        </section>
    )
}

export default Order
