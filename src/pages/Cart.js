import React from "react";
import Totals from "../components/Totals";
import { useStateValue } from "../StateProvider";

import "./Cart.css";
import CheckoutProduct from "../components/CheckoutProduct";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Cart() {
  const [{ cartContents }, dispatch] = useStateValue();

  return (
    <div>
      <Header />

      <section className="cart">
        <h1 className="cart__title">Your Cart</h1>
        <div className="cart__content">
          <div className="cart__addedProduct">
            {cartContents.map((item, i) => (
                <CheckoutProduct
                  key={i}
                  id={item.id}
                  title={item.title}
                  info={item.info}
                  image={item.image}
                  price={item.price}
                  rating={item.rating} 
                />
              ))}
          </div>
          <Totals />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Cart;
