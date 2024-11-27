const express = require("express");
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const cors = require("cors");

const app = express();
app.use(cors({ origin: "*", methods: ["GET", "POST", "PUT", "DELETE"] }));
app.use(express.json());

app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
//ทดสอบเชื่อมต่อ progress
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
