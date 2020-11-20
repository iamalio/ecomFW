import React from "react";
import "./Totals.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getCartContentsTotal } from "../reducer";
import { useHistory } from "react-router-dom";

//makes changes to the state bas.ed on the action

function Totals() {
  const history = useHistory();
  const [{ cartContents, user }, dispatch] = useStateValue();
  const handleBuyNow = () => {
    if (user) {
      history.push('/payment')
    }else{
      history.push('/login')
    }
  }
  return (
    <div className="totals__totalDue">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <h2>
              {user ? "Account email:" : "Welcome Guest"}
              <span> {user?.email}</span>
            </h2>
            <div className="totals__totals">
              <p>Subtotal ({cartContents.length} items):</p>
              <span className="totals__priceSpan">{value}</span>
            </div>
            <div className="totals__fees">
              <p>Shipping</p>
              <span className="totals__priceSpan">$0</span>
            </div>
            <div className="totals__fees">
              <p>Taxes</p>
              <span className="totals__priceSpan">$0</span>
            </div>
            <div className="totals__totals">
              <p>Total</p>
              <span className="totals__priceSpan">$0</span>
            </div>
            
          </>
        )}
        decimalScale={2}
        value={getCartContentsTotal(cartContents)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <div className="totals__totalsButtons">
              <button onClick={handleBuyNow} className="totals__checkOutNow">Checkout Now</button>
              <h2>Or</h2>
              <button className="totals__keepShopping">Keep Shopping</button>
            </div>
    </div>
  );
}

export default Totals;
