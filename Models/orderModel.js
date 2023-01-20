const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    productId: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],

    amount: {
      type: Number,
      require: true,
    },
    address: {
      type: Object,
      require: true,
    },

    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Orders", OrderSchema);


// Api Test 

// {

// "userId": "",
// "productId": [
//   {
//     "productId": "",
//     "quantity": "",
//   },
// ],

// "amount": "",
// "address": "",

// "status": ""

// }