const Product = require("../models/ProductModel");

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

module.exports = {
  createProduct,
};
