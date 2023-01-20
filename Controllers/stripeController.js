const stripe = require("stripe")(process.env.STRIPE_KEY);

const CreatePayment = (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "INR",
    },
    (stripeError, stripeResponce) => {
      if (stripeError) {
        res.status(500).json(stripeError);
      } else {
        res.status(200).json(stripeResponce);
      }
    }
  );
};

module.exports = { CreatePayment };
