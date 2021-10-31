require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const sequelize = require("./models/index");
const authRouter = require("./routes/router.controller");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set("view engine", "ejs");

sequelize
  .authenticate()
  .then(() => {
    console.log("connect");
  })
  .catch((error) => {
    console.log("no connected");
  });

app.get("/", (req, res) => {
  return res.render("home");
});

app.use(authRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Connect on port http://localhost:${PORT}`);
});
