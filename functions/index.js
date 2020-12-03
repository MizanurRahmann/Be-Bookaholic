const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
    "sk_test_51HtcNcEQ7fnc9zNauwtZoy5XM1JwW19MoiIOarc5bZL4gElz5YNBD8f8PRE6jNiNjRgIy7CmXNwpt8VMNoNxiKVd00cadaWd2a"
);

// API

// App Config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (req, res) => res.status(200).send("Hello"));
app.post("/payments/create", async (req, res) => {
    const total = req.query.total;
    console.log("Payment request recieved ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// Listen Command
exports.api = functions.https.onRequest(app);
