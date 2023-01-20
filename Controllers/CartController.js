const cartModel = require("../Models/cartModel");

// create cart

const createCart = async (req, res) => {
  try {
    const cartCreate = await cartModel(req.body);

    const cartData = await cartCreate.save();
    res.status(201).json(cartData);
    console.log("Successfully Create Cart 😄");
  } catch (err) {
    res.status(500).json(" You are not Create Cart Please login ❗");
  }
};

// update cart

const updateCart = async (req, res) => {
  try {
    const updatecart = await cartModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatecart);
  } catch (err) {
    res.status(401).json(err + "You are not Update Cart 👗 ");
  }
};

// delete Cart

const deleteCart = async (req, res) => {
  try {
    await cartModel.findByIdAndDelete(req.params.id);

    res.status(200).json("Cart data Successfully Delete 🗑️");
  } catch (err) {
    res.status(401).json("You are not to Delete Cart Data ❗");
  }
};

// get user Cart info  (User View Cart Details )

const getSingleUserCart = async (req, res) => {
  try {
    const cartDetail = await cartModel.findOne({
      userId: req.params.userId,
    });

    res.status(200).json(cartDetail);
  } catch (err) {
    res.status(401).json(" You are not View cart Details 🤖");
  }
};

// Get All Cart Details  (  Admin can view All cart  Details )

const getAllUserCart = async (req, res) => {
  try {
    const getAllUserCartDetails = await cartModel.find();

    res.status(200).json(getAllUserCartDetails);
  } catch (err) {
    res.status(500).json(err);
  }
};


module.exports = {
    createCart,getSingleUserCart,getAllUserCart,deleteCart,updateCart
 
};
