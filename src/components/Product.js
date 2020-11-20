import React from "react";
import { useStateValue } from "../StateProvider";
import "./Product.css";

function Product({ id, image, title, info, price, rating}) {
  const [{}, dispatch] = useStateValue();

  const addToCartContents = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        image: image,
        title: title,
        info: info,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div  className="product">
      <div className="product__image">
        <img src={image} alt={info}/>
        <button onClick={addToCartContents}>Add to cart</button>
      </div>

      <div className="product__info">
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <img key={i} src="./star.svg" alt="star" />
            ))}
        </div>
        <h1 className="product__title">{title}</h1>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
    </div>
  );
}

export default Product;
