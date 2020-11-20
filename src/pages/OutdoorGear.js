import React from 'react';
import './OutdoorGear.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Product from '../components/Product';

function OutdoorGear() {
    return (
        <div>
            <Header />
                <section className="outdoorGear">
                    <h1 className="outdoorGear__title">Our Outdoor Gear</h1>
                    <div className="outdoorGear__productBlock">
                    <Product
                        id="8"
                        image="./tent.jpg"
                        title="UltraNet Tent"
                        info="32x42, One single bag to hold all belongings. Waterproof and ready to handle any condituon."
                        price={929.49}
                        rating={5}
                    />
                    <Product
                        id="9"
                        image="./chair.jpg"
                        title="Living Large Chair"
                        info="32x42, One single bag to hold all belongings. Waterproof and ready to handle any condituon."
                        price={119.99}
                        rating={5}/>
                    <Product
                        id="10"
                        image="./table.jpg"
                        title="Super Table Pro"
                        info="32x42, One single bag to hold all belongings. Waterproof and ready to handle any condituon."
                        price={179.59}
                        rating={5}/>
                    <Product
                        id="11"
                        image="./product1b.png"
                        title="Ultimate Traveler Bag"
                        info="32x42, One single bag to hold all belongings. Waterproof and ready to handle any condituon."
                        price={99.99}
                        rating={5}/>
                    </div>
                    
                </section>
            <Footer />
        </div>
    )
}

export default OutdoorGear