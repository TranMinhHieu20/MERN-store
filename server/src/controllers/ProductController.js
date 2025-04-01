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
// update product
const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const data = req.body;
    if (!productId) {
      return res.status(400).json({
        status: "Err",
        message: "productId not found!",
      });
    }
    const response = await ProductService.updateProduct(productId, data);
    return res.status(201).json(response);
  } catch (error) {
    console.log("Error creating user:", error);
    return res.status(500).json({ message: error });
  }
};
// get details product
const getDetailsProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    if (!productId) {
      return res.status(400).json({
        status: "Err",
        message: "productId not found!",
      });
    }
    const response = await ProductService.getDetailsProduct(productId);
    return res.status(201).json(response);
  } catch (error) {
    console.log("Error creating user:", error);
    return res.status(500).json({ message: error });
  }
};
// delete product
const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    if (!productId) {
      return res.status(400).json({
        status: "Err",
        message: "productId not found!",
      });
    }
    const response = await ProductService.deleteProduct(productId);
    return res.status(201).json(response);
  } catch (error) {
    console.log("Error creating user:", error);
    return res.status(500).json({ message: error });
  }
};
// getAllProduct
const getAllProduct = async (req, res) => {
  try {
    console.log("limit, page: ", req.query);
    const { limit, page } = req.query;
    const response = await ProductService.getAllProduct(
      Number(limit) || 8,
      Number(page) || 0
    );
    return res.status(201).json(response);
  } catch (error) {
    console.log("Error getALL product:", error);
    return res.status(500).json({ message: error });
  }
};

module.exports = {
  createProduct,
  updateProduct,
  getDetailsProduct,
  deleteProduct,
  getAllProduct,
};
