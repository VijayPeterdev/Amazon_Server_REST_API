const { CreatePayment } = require('../Controllers/stripeController');
const { verifyandAuthCheck } = require('../verifyToken');

const router = require('express').Router();




// Stripe Payment Create 

router.post("/",  CreatePayment);


module.exports = router;