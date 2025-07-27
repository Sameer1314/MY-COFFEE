const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/employee");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["https://brewandco-nf92.onrender.com", "http://localhost:3001"], // <-- your React dev URL
    credentials: true, // <-- allow the session cookie
  })
);

// 1) Connect to Mongo
mongoose.connect(process.env.MONGO_URI);

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email, password: password }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json({ message: "Login successful", user });
      } else {
        res.json({ message: "Invalid password" });
      }
    } else {
      res.json({ message: "User not found" });
    }
  });
});

app.post("/signup", (req, res) => {
  EmployeeModel.create(req.body)
    .then((employee) => res.json(employee))
    .catch((err) => res.json({ error: err.message }));
});

app.listen(process.env.PORT || 3001, () => {
  console.log("Server running...");
});
