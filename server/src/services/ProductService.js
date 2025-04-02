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

// delete product
const deleteProduct = (productId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkProductId = await Product.findOne({ _id: productId });
      if (!checkProductId) {
        resolve({ status: "ERROR", message: "The product is not registered!" });
      }
      await Product.findByIdAndDelete(productId);

      return resolve({
        status: "Ok",
        message: "DELETE Product Successfully",
      });
    } catch (error) {
      return reject(error);
    }
  });
};

// getAllProduct
const getAllProduct = (limit, page, sort, filter) => {
  return new Promise(async (resolve, reject) => {
    try {
      const totalProduct = await Product.countDocuments();
      if (filter) {
        const label = filter[0];
        const allProductFilter = await Product.find({
          [label]: { $regex: filter[1], $options: "i" },
        })
          .limit(limit)
          .skip(limit * page);
        return resolve({
          status: "Ok",
          message: "getAll Product Successfully",
          data: allProductFilter,
          total: totalProduct,
          pageCurrent: Number(page + 1),
          totalPage: Math.ceil(totalProduct / limit),
        });
      }
      if (sort) {
        let objectSort = {};
        objectSort[sort[1]] = sort[0];
        console.log("objectSort: ", objectSort);
        const allProductSort = await Product.find()
          .limit(limit)
          .skip(limit * page)
          .sort(objectSort);
        return resolve({
          status: "Ok",
          message: "getAll Product Successfully",
          data: allProductSort,
          total: totalProduct,
          pageCurrent: Number(page + 1),
          totalPage: Math.ceil(totalProduct / limit),
        });
      }
      const allProduct = await Product.find()
        .limit(limit)
        .skip(limit * page);

      return resolve({
        status: "Ok",
        message: "getAll Product Successfully",
        data: allProduct,
        total: totalProduct,
        pageCurrent: Number(page + 1),
        totalPage: Math.ceil(totalProduct / limit),
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
  deleteProduct,
  getAllProduct,
};
