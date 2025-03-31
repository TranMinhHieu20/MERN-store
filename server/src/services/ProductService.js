const Product = require("../models/ProductModel");

// create product
const createProduct = (newProduct) => {
  return new Promise(async (resolve, reject) => {
    const { name, image, type, price, countInStock, rating, description } =
      newProduct;
    try {
      const checkName = await Product.findOne({
        name: name,
      });
      if (checkName) {
        return resolve({
          status: "Err",
          message: "The name is already registered!",
        });
      }
      const createdProduct = await Product.create({
        name,
        image,
        type,
        price,
        countInStock,
        rating,
        description,
      });
      return resolve({
        status: "Ok",
        message: "Product created Successfully",
        data: createdProduct,
      });
    } catch (error) {
      return reject(error);
    }
  });
};

// update product
const updateProduct = (productId, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkProductId = await Product.findOne({ _id: productId });
      console.log("checkProductId: ", checkProductId);
      if (!checkProductId) {
        resolve({ status: "ERROR", message: "The user is not registered!" });
      }
      const updatedProduct = await Product.findByIdAndUpdate(productId, data, {
        new: true,
      });
      return resolve({
        status: "Ok",
        message: "Product updated Successfully",
        data: updatedProduct,
      });
    } catch (error) {
      return reject(error);
    }
  });
};

// get details product
const getDetailsProduct = (productId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkProductId = await Product.findOne({ _id: productId });
      if (!checkProductId) {
        resolve({ status: "ERROR", message: "The product is not registered!" });
      }

      return resolve({
        status: "Ok",
        message: "Get Details Product Successfully",
        data: checkProductId,
      });
    } catch (error) {
      return reject(error);
    }
  });
};

module.exports = {
  createProduct,
  updateProduct,
  getDetailsProduct,
};
