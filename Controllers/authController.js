// const express = require('express');

const userModel = require("../Models/userModel");
const CryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");

// Signup Process

const signup = async (req, res) => {
  const EncryptPass = CryptoJs.AES.encrypt(
    req.body.password,
    process.env.ENCRYPTKEY
  ).toString();

  try {
    const newUser = new userModel({
      username: req.body.username,
      password: EncryptPass,
      email: req.body.email,
      phonenumber: req.body.phonenumber,
    });

    const user = await newUser.save();

    const { password, ...other } = user._doc;

    res.status(201).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Login process

const signin = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    !user && res.status(401).json("User Not Found 😞");

    const hashpassword = CryptoJs.AES.decrypt(
      user.password,
      process.env.ENCRYPTKEY
    );

    const RealPassword = hashpassword.toString(CryptoJs.enc.Utf8);

    RealPassword !== req.body.password &&
      res.status(401).json("Password is Wrong 🔒");

    const { password, ...other } = user._doc;

    // Json Web token

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWTKEY,
      { expiresIn: "3d" }
    );

    res.status(200).json({ ...other, accessToken });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { signup, signin };
