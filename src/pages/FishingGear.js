import React from "react";
import "./FishingGear.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Product from "../components/Product";

function FishingGear() {
  return (
    <div>
      <Header />
      <section className="fishingGear">
        <h1 className="fishingGear__title">Our Fishing Gear</h1>
        <div className="fishingGear__productBlock">
          <Product
            id="4"
            image="./lures.jpg"
            title="Hook em' Good Lures"
            info="32x42, One single bag to hold all belongings. Waterproof and ready to handle any condituon."
            price={19.49}
            rating={5}
          />
          <Product
            id="5"
            image="./fishingNet.jpg"
            title="Catch em' All Net"
            info="32x42, One single bag to hold all belongings. Waterproof and ready to handle any condituon."
            price={79.99}
            rating={5}
          />
          <Product
            id="6"
            image="./tacklebox.png"
            title="Tacklebox 3000 Elite"
            info="32x42, One single bag to hold all belongings. Waterproof and ready to handle any condituon."
            price={49.59}
            rating={5}
          />
          <Product
            id="7"
            image="./spinreel.png"
            title="Spincaster Pro"
            info="32x42, One single bag to hold all belongings. Waterproof and ready to handle any condituon."
            price={99.99}
            rating={5}
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default FishingGear;
