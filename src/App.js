import React, { useEffect } from "react";
import "./App.css";
import { useStateValue } from "./StateProvider";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import FishingGear from "./pages/FishingGear";
import { auth } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./pages/Orders";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OutdoorGear from "./pages/OutdoorGear";
import WearableGear from './pages/WearableGear';
import Payment from "./pages/Payment";


const promise = loadStripe(
  "pk_test_51Hcd0iBxM5ZWzv6yHYJJ37kjYkAKv8GL8hQsZxaKrj5lnRfeDzFZXx8nqJavUbT8kt9HQdaWRILpsFBYWTyaViob00nBaHsd7n"
);
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    <Elements stripe={promise}>
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/login" exact component={Login} />
          <Route path="/fishing" exact component={ FishingGear } />
          <Route path="/outdoor" exact component={ OutdoorGear } />
          <Route path="/wearable" exact component={ WearableGear } />
          <Route path="/payment" exact component={ Payment } />
          <Route path="/orders" exact component={ Orders } />
        </Switch>
      </div>
    </Router>
    </Elements>
  );
}

export default App;
