const { updateOrder } = require("../Controllers/orderController");
const { getSingleOrderDetails } = require("../Controllers/orderController");
const { monthlyIncome } = require("../Controllers/orderController");
const { getAllOrder } = require("../Controllers/orderController");
const { deleteOrder } = require("../Controllers/orderController");
const { createOrder } = require("../Controllers/orderController");
const { verifyandAuthCheck, verifyAdminCheck } = require("../verifyToken");

const router = require("express").Router();


// Create Order

router.post("/",verifyandAuthCheck, createOrder );

// Update Order

router.put("/:id",verifyandAuthCheck, updateOrder );

//  Delete Order

router.delete("/:id",verifyandAuthCheck, deleteOrder );

// get order (User App)

router.get("/find/:id", verifyandAuthCheck, getSingleOrderDetails);

// get All order Details (Admin App)

router.get("/", verifyAdminCheck, getAllOrder);

// get Revenue Details Admin App
router.get("/status", verifyAdminCheck,monthlyIncome);







  


module.exports = router;