import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../StateProvider";


function CheckoutProduct({ id, image, title, info, price, rating}) {
    const [{}, dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    }
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt={info}/>

      <div className="checkoutProduct__details">
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <img key={i} src="./star.svg" alt="star" />
            ))}
        </div>
        <div>
          <h1 className="checkoutProduct__title">{title}</h1>
          <p className="checkoutProduct__info">{info}</p>
        </div>
      </div>
      <div className="checkoutProduct__pricebox">
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <button onClick={removeFromCart} className="checkoutProduct__remove">Remove from Cart</button>
      </div>
    </div>
  );
            }          

export default CheckoutProduct;
