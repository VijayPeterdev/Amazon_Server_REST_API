const orderModel = require("../Models/orderModel");

// create Order

const createOrder = async (req, res) => {
  try {
    const Order = await orderModel(req.body);

    const orderData = await Order.save();
    res.status(201).json(orderData);
    console.log("Successfully  Order Placed 👜");
  } catch (err) {
    res.status(500).json("You Can place order only Your Account❗");
  }
};

// update cart

const updateOrder = async (req, res) => {
  try {
    const updateuserorder = await orderModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updateuserorder, "Successfully Order Update");
  } catch (err) {
    res.status(401).json(err + "You are not update the order Status 👗 ");
  }
};

// delete Cart

const deleteOrder = async (req, res) => {
  try {
    await orderModel.findByIdAndDelete(req.params.id);

    res.status(200).json("Order data Successfully Delete 🗑️");
  } catch (err) {
    res.status(401).json("You are not to Delete Order Data ❗");
  }
};

// get user order info  (User View Order Details )

const getSingleOrderDetails = async (req, res) => {
  try {
    const orderDetail = await orderModel.find({
      userId: req.params.id,
    });

    res.status(200).json(orderDetail);
  } catch (err) {
    res.status(401).json(" You are not View Order Details 🤖");
  }
};

// Get All Order Details  (  Admin can view All Order  Details )

const getAllOrder = async (req, res) => {
  try {
    const getAllUserOrderDetails = await productModel.find();

    res.status(200).json(getAllUserOrderDetails);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Monthly Income

const monthlyIncome = async (req, res) => {
  try {
    const date = new Date();

    const lastmonth = new Date(date.setMonth(date.getMonth() - 1));
    const prevoiusMonth = new Date(
      new Date().setMonth(lastmonth.getMonth() - 1)
    );

    const income = await orderModel.aggregate([
      { $match: { createAt: { $gte: prevoiusMonth } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);

    res.status(200).json(income);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createOrder,
  updateOrder,
  deleteOrder,
  getSingleOrderDetails,
  getAllOrder,
  monthlyIncome,
};
