//สร้าง usercontroller.js
const productService = require("../services/productService");
//สร้าง function ในการดึงข้อมูลผู้ใช้ทั้งหมดออกมา

const getAllproduct = async (req, res, next) => {
  try {
    const product = await productService.getAllproduct();
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

const getProductById = async (req, res, next) => {
  try {
    const product = await productService.getProductById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

const addProduct = async (req, res, next) => {
  const { name, price, qty } = req.body;
  try {
    const product = await productService.addProduct(name, price, qty);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

//สร้าง function สำหรับแก้ไข product
const updateProduct = async (req, res, next) => {
  const { name, price, qty, id } = req.body;
  try {
    const product = await productService.updateProduct(name, price, qty, id);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

//สร้าง function สำหรับลบ product
const deleteProduct = async (req, res, next) => {
  try {
    const product = await productService.deleteProduct(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllproduct,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};
