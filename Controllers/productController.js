const productModel = require("../Models/productModel");

// create product

const createProduct = async (req, res) => {
  try {
    const productCreate = await productModel(req.body);

    const newproduct = await productCreate.save();
    res.status(201).json(newproduct);
    console.log("Product Successfully Create 👖😄");
  } catch (err) {
    res.status(500).json(" You are not Create Any Product  ❗👗👖 ");
  }
};

// update product

const updateProduct = async (req, res) => {
  try {
    const updateProduct = await productModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updateProduct);
  } catch (err) {
    res.status(401).json(err + "You are not Update Product 👗 ");
  }
};

// delete product

const deleteProduct = async (req, res) => {
  try {
    await userModel.findByIdAndDelete(req.params.id);

    res.status(200).json("Product Successfully Delete 🗑️");
  } catch (err) {
    res.status(401).json("You are not to Delete Product ❗");
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id);

    res.status(200).json(product);
  } catch (err) {
    res.status(401).json(" You are not View All Product 🤖");
  }
};

// Get All Product  ( User App and Admin App )

const getAllProduct = async (req, res) => {
  try {
    const query = req.query.new;
    const categories = req.query.categories;
    let product;

    //New  Query vantha
    if (query) {
      product = await productModel.find().sort({ createdAt: -1 }).limit(7);
    } 
    // Categroies vantha

    else if (categories) {
      product = await productModel.find({
        categories: {
          $in: [categories],
        },
      });
    } 
    // Without Query get All Data
    else {
      product = await productModel.find();
    }

    res.status(200).json(product);
  } catch (err) {
    res.status(401).json(" You are not View All Product 🤖");
  }
};

// Admin App User Status

// const userStatus = async (req, res) => {
//   const date = new Date();
//   const lastYear = Date(date.setFullYear(date.getFullYear - 1));

//   try {
//     const userStatus = await userModel.aggregate([
//       { $match: { createAt: { $gte: lastYear } } },
//       {
//         $project: {
//           month: { $month: "$createAt" },
//         },
//       },
//       {
//         $group: {
//           _id: "$month",
//           total: { $sum: 1 },
//         },
//       },
//     ]);

//     res.status(200).json(userStatus);
//   } catch (err) {
//     res.status(500).json("Your now See user Status");
//   }
// };

module.exports = {
  createProduct,
  deleteProduct,
  getAllProduct,
  updateProduct,
  getSingleProduct,
};
