import React, { useState, useEffect } from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Payment.css";
import CurrencyFormat from "react-currency-format";
import axios from '../axios';
import { useHistory } from "react-router-dom";
import { getCartContentsTotal } from "../reducer";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "../components/CheckoutProduct";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { db } from "../firebase";

function Payment() {
  const [{ cartContents, user }, dispatch] = useStateValue();
  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);

useEffect(() => {
  // generate the special stripe secret which allows us to charge a customer
  const getClientSecret = async () => {
    const response = await axios({
      method: 'post',
      //Stripe expects the total in currency subunits(USD/cents)
      url: `/payments/create?total=${getCartContentsTotal(cartContents) * 100}`
    })
    setClientSecret(response.data.clientSecret)
  }
  getClientSecret();
}, [cartContents])

console.log('THE SECRET IS >>>', clientSecret)

  const handleSubmit = async (event) => {
    
      if (user) {
       // do all the fancy stripe stuff...
    event.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
          card: elements.getElement(CardElement)
      }  
    }).then(({ paymentIntent }) => {
      // paymentIntent = payment confirmation
      db
      .collection('users')
      .doc(user?.uid)
      .collection('orders')
      .doc(paymentIntent.id)
      .set({
        cartContents: cartContents,
        amount: paymentIntent.amount,
        created: paymentIntent.created
      })

      setSucceeded(true);
      setError(null)
      setProcessing(false)
      
      
    dispatch({
        type: 'EMPTY_CART_CONTENTS'
    })
      history.replace('/orders')

    })
  }else{
        history.push('/login')
      }
    }
    
  

  const handleChange = event => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");

  }
  return (
    <div>
      <Header />
      <section className="payment">
        <div className="payment__container">
          {/* Payment section for Deliver Address */}
          <div className="payment__section">
            <div className="payment__title">
            <h2>Logged in as: <span>{user?.email}</span></h2>
              
            </div>
            <div className="payment__address">
            <h1>Account Delivery Address</h1>
            
            <p>27 Bluesilver St.</p>
            <p>Austin, TX 78727</p>
            </div>
              
        </div>
        {/* Payment section for Items in Purchase */}
          
          <div className="payment__section">
          <div className="payment__title">
            <h1>Items in your purchase</h1>
          </div>
          <div className="payment__items">
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
          </div>
           {/* Payment section - Payment method */}
           <div className='payment__section'>
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                            {/* Stripe magic will go here */}

                            <form onSubmit={handleSubmit}>
                                <CardElement className="payment__cardElement" onChange={handleChange}/>

                                <div className='payment__priceContainer'>
                                    <CurrencyFormat
                                        renderText={(value) => (
                                            <h3>Order Total: {value}</h3>
                                        )}
                                        decimalScale={2}
                                        value={getCartContentsTotal(cartContents)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$"}
                                    />
                                    <button disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                    </button>
                                </div>

                                  {/* Errors */}
                                {error && <div>{error}</div>}
                            </form>
                    </div>
                </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Payment;
