const express = require('express');

const app = express();
const db = require("./db");
const PORT = process.env.PORT || 4002;
const cors = require("cors");
app.use(cors());
const AuthController = require("./controller/authController");
app.use("/api/auth", AuthController)

app.listen(PORT, () =>{
    console.log(`Server listening on port ${PORT}`);
})
