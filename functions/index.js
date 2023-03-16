const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")(
  "sk_test_51MjcgdSDibdwkhmJXKnbzfiCFxoBp3iUumUyz5DxVNwLLt2xB13ROp1zWIxjlC4x42dUXccf6Yv3NTLzM2s5i6Ms00gfQmbOkZ"
);

//API

// App Config
const app = express();

//- Middleware
app.use(cors({ origin: true }));
app.use(express.json());

//- API Routes
app.get("/", (request, response) => response.status(200).send("Ola World"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log(" TOTAL PAYMENT REQUESTED ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen Commmand
exports.api = functions.https.onRequest(app);

//http://127.0.0.1:5001/clone-764d8/us-central1/api
