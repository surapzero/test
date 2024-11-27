const db = require("../utils/db");
const User = require("../models/userModel");

//สร้าง function ในการดึงข้อมูลผู้ใช้ทั้งหมดออกมา
const getAllUser = async () => {
  const client = await db.connect();
  const result = await client.query("SELECT * FROM public.user");
  client.release();
  return result.rows.map(
    (item) =>
      new User(item.id, item.firstname, item.lastname, item.email, item.phone)
  );
};

module.exports = { getAllUser };
