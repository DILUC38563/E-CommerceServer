import express from "express";
import Stripe from "stripe";

const router = express.Router();
const stripe = new Stripe(
  "sk_test_51KVFaESGS6K0tq9daK4tbjaOV3RUxt6s6JIhU19g79iYe882C1xGDGbFnbFsy1IUAcxFnH2LmFHr871YwhPKvkY6009edK3HuU"
);
router.post("/payment", async (req, res) => {
  await stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRES) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRES);
      }
    }
  );
});

export default router;
