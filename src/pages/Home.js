import React from "react";
import Header from "../components/Header"
import Footer from "../components/Footer"
import "./Home.css";
import { Link } from "react-router-dom";
import Product from "../components/Product"



function Home() {


  return (
    <div>
            <Header />

      <section className="home__mainBanner">
        <h1>
          Get farther, <span>easier</span>.
        </h1>
        <Link to="/">Learn How</Link>
      </section>
      <section className="home__pageContainer">
        <div className="home__featuredItem">
          <div className="home__featuredItemText">
            <h1>Proudly raised in water.</h1>
            <p>Life has many struggles and many opportunities to fail 
              but it is those of us who persevere that 
              get to taste our victories.
            </p>
            <h2>Whatever the size of your catch, <span>we'll help you reel it in.</span></h2>
          </div>
          <img src="./just-fishing.jpg" className="home__featuredItemImage" alt="This is our favorite item of the month!"
          />
        </div>
        <div>
          <div id="waves">
          </div>
        </div> 
        <div className="home__mainProduct">
          <h1>A whole fishing trip <strong>in one spot.</strong></h1>
          <img src="product1.png" alt="This is our favorite."/>
        </div> 
        <div className="home__favoriteProducts">
          <h1 className="home__fanFavorites">Fan Favorites</h1>
          <div className="home__productList">
          <Product
          id="1"
          image="./product1a.png"
          title="UltimateTraveler Bag" 
          info="32x42, One single bag to hold all belongings. Waterproof and ready to handle any condituon."
          price={129.49}
          rating={5}/>
          <Product 
          id="2"
          image="./tacklebox.png"
          title="Tacklebox 3000 Elite"
          info="32x42, One single bag to hold all belongings. Waterproof and ready to handle any condituon."
          price={49.59}
          rating={5}/>
          <Product 
          id="3"
          image="./spinreel.png"
          title="Spincaster Pro" 
          info="32x42, One single bag to hold all belongings. Waterproof and ready to handle any condituon."
          price={99.99}
          rating={5}/>
          </div>
        </div>
        
      </section>
      <Footer />
    </div>
  );
}

export default Home;
