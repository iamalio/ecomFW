const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
"sk_test_51Hcd0iBxM5ZWzv6yUjfMkXo8dFyoyint2L58wcPg1pz9ZUwDJr6J2tn2E5FWLlLpDy7avIYAip56zOs54O1e6YGO00Qb7zHuOD"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received-- for the amount of >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

//sample endpoint

//http://localhost:5001/fishwrangler-life/us-central1/api