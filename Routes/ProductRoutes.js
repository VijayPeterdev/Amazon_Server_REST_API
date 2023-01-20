const { createProduct, updateProduct, deleteProduct, getAllProduct, getSingleProduct } = require("../Controllers/productController");
const { verifyAdminCheck, verifyandAuthCheck } = require("../verifyToken");

const router = require("express").Router();


// Create Product
router.post("/" , verifyAdminCheck, createProduct );


// update Product
router.put("/:id" , verifyAdminCheck, updateProduct );

//delete Product
router.delete("/:id" , verifyAdminCheck, deleteProduct );

// getAllProduct ( Every one can see all the product)
router.get("/" ,  getAllProduct );

// get Single Product
router.get("/find/:id" , getSingleProduct );


  


module.exports = router;