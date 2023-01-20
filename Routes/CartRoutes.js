const { createCart, updateCart, getSingleUserCart, deleteCart, getAllUserCart } = require("../Controllers/CartController");
const { verifyandAuthCheck, verifyAdminCheck } = require("../verifyToken");

const router = require("express").Router();


// Create Cart

router.post("/" , verifyandAuthCheck,  createCart );

// update Cart

router.put("/:id", verifyandAuthCheck,  updateCart);

// Read Single User Cart (get)

router.get("/find/:UserId", verifyandAuthCheck, getSingleUserCart);

// Delete Cart 
router.delete("/:id" , verifyandAuthCheck , deleteCart);

// get All user  Cart Details (Admin App)
router.get("/", verifyAdminCheck, getAllUserCart);
  


module.exports = router;