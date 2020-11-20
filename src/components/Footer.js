import React from 'react';
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <section className="footer">
            
            <div className="footer__content">
            <img src="./orange-vintage.svg" alt="Founded 2020, in Brownsville, TX."/>
            <div className="footer__notifyMe">
                <h1>Sign Me Up</h1>
                <div className="footer__notifyMeRow">
                    <h2>Be the first to know about new products and special offers </h2>
                    <input id="email" type="email" placeholder="email@host.com"/>
                    <button className="footer__button"></button>
                </div>
                <div className="footer__usefulLinks">
                    <div className="footer__pageLinks">
                    <Link to="/">Fishing Gear</Link>
          <Link to="/">Outdoor Gear</Link>
          <Link to="/">Wearable</Link>
                    </div>
                    <div className="footer__socialLinks" >
                        <Link to="/"><img  src="./FBicon.svg" alt="Link to our facebook page."/></Link>
                        <Link to="/"><img  src="./IGicon.svg" alt="Link to our Instagram page."/></Link>
                    </div>
                </div> 
            </div>
            </div>
            
        </section>
    )
}

export default Footer
