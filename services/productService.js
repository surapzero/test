const db = require("../utils/db");
const Product = require("../models/ProductModel");

//สร้าง function ในการดึงข้อมูลผู้ใช้ทั้งหมดออกมา
const getAllproduct = async () => {
  const client = await db.connect();
  const result = await client.query("SELECT * FROM public.product");
  client.release();
  return result.rows.map(
    (item) =>
      new Product(item.id, item.name, item.price, item.qty, item.createdate)
  );
};

const getProductById = async (id) => {
  const client = await db.connect();
  const result = await client.query(
    "SELECT * FROM public.product where id = $1",
    [id]
  );
  client.release();
  return result.rows.map(
    (item) =>
      new Product(item.id, item.name, item.price, item.qty, item.createdate)
  );
};

const addProduct = async (name, price, qty) => {
  const client = await db.connect();
  const result = await client.query(
    "INSERT INTO public.product(name, price, qty) VALUES($1, $2, $3) RETURNING *",
    [name, price, qty]
  );
  client.release();
  return new Product(
    result.rows[0].id,
    result.rows[0].name,
    result.rows[0].price,
    result.rows[0].qty,
    result.rows[0].createdate
  );
};

//สร้าง function สำหรับแก้ไข product
const updateProduct = async (name, price, qty, id) => {
  const client = await db.connect();
  const result = await client.query(
    "UPDATE public.product SET name = $1, price = $2, qty = $3 WHERE id = $4 RETURNING *",
    [name, price, qty, id]
  );
  client.release();
  return new Product(
    result.rows[0].id,
    result.rows[0].name,
    result.rows[0].price,
    result.rows[0].qty,
    result.rows[0].createdate
  );
};

//สร้าง function สำหรับลบ product
const deleteProduct = async (id) => {
  const client = await db.connect();
  const result = await client.query(
    "DELETE FROM public.product WHERE id = $1 RETURNING *",
    [id]
  );
  client.release();
  return new Product(
    result.rows[0].id,
    result.rows[0].name,
    result.rows[0].price,
    result.rows[0].qty,
    result.rows[0].createdate
  );
};

module.exports = {
  getAllproduct,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};
