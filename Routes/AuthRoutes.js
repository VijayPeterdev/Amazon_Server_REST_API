const router = require("express").Router();
const  AuthController = require('../Controllers/authController.js');


router.post("/signup" , AuthController.signup );
router.post("/signin" , AuthController.signin );


  


module.exports = router;