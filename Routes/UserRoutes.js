const router = require("express").Router();
const  userController = require('./../Controllers/userControll.js');


router.get("/" , userController.SignUp );

  


module.exports = router;