const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique : true,
  },
  password: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique : true
  },
  phonenumber: {
    type: Number,
  },
  isAdmin: {
    type : Boolean,
    default : false,
  }
},{timestamps:true});

module.exports = mongoose.model("User", UserSchema);



// Api Json
// {

//   "username": "",
//   "password": "",
//   "email": "",
//   "phonenumber": "",
//   "isAdmin": ""
// }