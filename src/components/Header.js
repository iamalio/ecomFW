import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

function Header() {
  const [{cartContents, user}] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <section className="top-header">
        <div className="top-header__slogan">
          <h1>
            You eat what you catch. <span>Be Prepared.</span>
          </h1>
        </div>
        <div className="top-header__search">
          <input className="top-header__searchInput" type="text" />
          <SearchIcon className="top-header__searchIcon" />
        </div>
        <div className="top-header__nav">
          <div className="top-header__option" >
          <span className="top-header__optionOne" >
            {user ? 'Account email:' : 'This site is for presentation only'} 
            <span> {user?.email}</span>
          </span>
            
          </div>
          <div className="top-header__option">

            <Link to={!user && "/orders"} className="top-header__optionOne">{user ? 'Orders' : ''}</Link>
            <Link to={!user && "/login"} className="top-header__optionTwo" onClick={handleAuthentication}>{user ? 'Log Out' : 'Log In'}</Link>

          </div>
        </div>
        
      </section>
      <section className="sub-header">
        <Link to="/">
          <img
            className="sub-header__logo"
            src="./logo.svg"
            alt="Fishwrangler"
          />
        </Link>
        <div className="sub-header__nav">
          <Link to="/fishing">Fishing</Link>
          <Link to="/outdoor">Outdoor</Link>
          <Link to="/wearable">Wearable</Link>
          <Link to="/cart">
          <div className="sub-header__optionBasket">
          
            <ShoppingCartIcon fontSize="large" className="sub-header__optionBasketIcon" />
            <span className="sub-header__basketCount">
              {cartContents?.length}
            </span>
          
        </div>
        </Link>
        </div>
        
      </section>
    </div>
  );
}

export default Header;
