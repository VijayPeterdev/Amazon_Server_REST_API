const router = require("express").Router();
const  {updateUser ,deleteUser, getuser, userStatus} = require('../Controllers/userController.js');
const { verifyToken, verifyandAuthCheck, verifyAdminCheck } = require("../verifyToken.js");



// Update user account
router.put("/:id" ,  verifyandAuthCheck ,updateUser );

// delete user account
router.delete("/:id" , verifyandAuthCheck, deleteUser );

// get All user Admin -App
router.get("/", verifyAdminCheck, getuser );

// get All user Admin -App
router.get("/status", verifyAdminCheck, userStatus );
  


module.exports = router;