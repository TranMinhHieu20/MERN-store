const ProductService = require("../services/ProductService");

//create product
const createProduct = async (req, res) => {
  try {
    const { name, image, type, price, countInStock, rating, description } =
      req.body;
    console.log("req.body: ", req.body);
    if (!name || !image || !type || !price || !countInStock || !rating) {
      return res.status(400).json({
        status: "Err",
        message: "All fields are required!",
      });
    }
    const response = await ProductService.createProduct(req.body);
    return res.status(201).json(response);
  } catch (error) {
    console.log("Error creating user:", error);
    return res.status(500).json({ message: error });
  }
};

module.exports = {
  createProduct,
};
