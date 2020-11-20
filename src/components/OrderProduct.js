import React from "react";
import "./OrderProduct.css";
import { useStateValue } from "../StateProvider";


function OrderProduct({ id, image, title, info, price, rating}) {
    const [{}, dispatch] = useStateValue();

  return (
    <div className="orderProduct">
      <img className="orderProduct__image" src={image} alt={info}/>

      <div className="orderProduct__details">
        <div className="orderProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <img key={i} src="./star.svg" alt="star" />
            ))}
        </div>
        <div>
          <h1 className="orderProduct__title">{title}</h1>
          <p className="orderProduct__info">{info}</p>
        </div>
      </div>
      <div className="orderProduct__pricebox">
        <p className="orderProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        
      </div>
    </div>
  );
            }          

export default OrderProduct;