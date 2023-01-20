const userModel = require("../Models/userModel");
const CryptoJs = require("crypto-js");

// update user

const updateUser = async (req, res) => {
  if (req.body.password) {
    // password encrypt again
    req.body.password = CryptoJs.AES.encrypt(
      req.body.password,
      process.env.ENCRYPTKEY
    ).toString();
  }

  try {
    const updateUser = await userModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    const { password, ...other } = updateUser._doc;

    res.status(200).json("Successfully Update User ✔️ :" + other);
  } catch (err) {
    res.status(401).json(err);
  }
};

// delete user

const deleteUser = async (req, res) => {
  try {
    await userModel.findByIdAndDelete(req.params.id);

    res.status(200).json("Account Successfully Delete 🗑️");
  } catch (err) {
    res.status(401).json("You are not to Delete user ❗");
  }
};

// Get All User - Admin App

const getuser = async (req, res) => {
  try {
    const query = req.query.new;

    const getUser = query
      ? await userModel.find().sort({ _id: -1 }).limit(7)
      : await userModel.find();

    const { password, ...other } = getUser;

    res.status(200).json(other);
  } catch (err) {
    res.status(401).json(" You are not View the User 🤖");
  }
};

// Admin App User Status

const userStatus = async (req, res) => {
  const date = new Date();
  const lastYear = Date(date.setFullYear(date.getFullYear - 1));

  try {
    const userStatus = await userModel.aggregate([
      { $match: { createAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);

    res.status(200).json(userStatus);
  } catch (err) {
    res.status(500).json("Your now See user Status");
  }
};

module.exports = { updateUser, deleteUser, getuser, userStatus };
