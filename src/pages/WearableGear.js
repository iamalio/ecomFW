import React from 'react';
import './WearableGear.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Product from '../components/Product';

function WearableGear() {
    return (
        <div>
            <Header />
                <section className="wearableGear">
                    <h1 className="wearableGear__title">Our Outdoor Gear</h1>
                    <div className="wearableGear__productBlock">
                    <Product
                        id="12"
                        image="./jacket1.jpg"
                        title="PolarSkin Extreme"
                        info="32x42, One single bag to hold all belongings. Waterproof and ready to handle any condituon."
                        price={329.49}
                        rating={5}/>
                    <Product
                        id="13"
                        image="./jacket2.jpg"
                        title="PolarSkin Light"
                        info="32x42, One single bag to hold all belongings. Waterproof and ready to handle any condituon."
                        price={219.99}
                        rating={5}/>
                    <Product
                        id="14"
                        image="./jacket3.jpg"
                        title="PolarSkin Terra"
                        info="32x42, One single bag to hold all belongings. Waterproof and ready to handle any condituon."
                        price={159.59}
                        rating={5}/>
                    <Product
                        id="15"
                        image="./gloves.jpg"
                        title="DeathGrip 2020" 
                        info="32x42, One single bag to hold all belongings. Waterproof and ready to handle any condituon."
                        price={29.99}
                        rating={5}/>
                    </div>
                    
                </section>
            <Footer />
        </div>
    )
}

export default WearableGear