import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase.js"

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const logIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }
    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }
  return (
    <div className="login">
      
      <section className="login__container">
      <Link to="/">
          <img className="login__logo" src="./logo.svg" alt="Fishwrangler" />
      </Link>
        
        <form className="login__form">
        <h1 className="login__title">Welcome, Please login.</h1>
        
          <h2 className="login__label">
            Email
          </h2>
          <input type='text' className="login__input"  value={email} onChange={e => setEmail(e.target.value)} />
          <h2 className="login__label">
            Password
          </h2>
          <input type='password' className="login__input" value={password} onChange={e => setPassword(e.target.value)} />
          <button type="submit" onClick={logIn} className="login__button">Log In</button>
          <button onClick={register} className="login__newAccount">Create a new account.</button>
        </form>
        <div className="login__text">
          <p className="login__disclaimer">Fishwrangler is an online retailer of goods from third party companies and no warranty is given by Fishwrangler on their behalf.</p>
          <p className="login__termsOfUse">By logging in you agree to abide by our terms of use established in our End User Agreement.</p>
        </div>
        
      </section>
    </div>
  );
}

export default Login;
