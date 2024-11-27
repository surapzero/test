//สร้าง usercontroller.js
const userService = require("../services/userService");
//สร้าง function ในการดึงข้อมูลผู้ใช้ทั้งหมดออกมา

const getAllUser = async (req, res) => {
  try {
    const user = await userService.getAllUser();
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllUser };