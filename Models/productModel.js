const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      require: true,
    },
    productDetails: {
      type: String,
    },
    productPrice: {
      type: Number,
      require: true,
    },
    productCrossprice: {
      type: Number,
      require: true,
    },
    categories: {
      type: Array,
      require: true,
    },

    productRating: {
      type: String,
      default: 0,
    },
    productStar: {
      type: Number,
      default: 0,
    },
    productBrand: {
      type: String,
    },
    productSize: {
      type: Array,
    },
    productColor: {
      type: Array,
  
    },
    productImage: {
      type: Array,
    },
    instock: {
      type: Boolean,
      default: true,
    },
    instockCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);

// Json format for Api test
// {
// "productName":"",
// "productDetails": "",
// "productPrice": "",
// "productCrossprice":"",
// "categories": "[]",
// "productRating": "",

// "productStar":"",
// "productBrand": "",
// "productSize": "",
// "productColor":"",
// "productImage" : "",
// "instockCount": ""
// }
