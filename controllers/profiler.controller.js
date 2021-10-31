const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User.Model");

const { APP_SECRET, SALT_ROUND } = process.env;

// create token
const createToken = (id) => {
  return jwt.sign({ id }, APP_SECRET, { expiresIn: "7 days" });
};

const register = (req, res) => {
  return res.render("register");
};

const login = (req, res) => {
  return res.render("login");
};

const biodata = (req, res) => {
  return res.render("biodata");
};

const history = (req, res) => {
  return res.render("history");
};

// create user register
const createRegister = async (req, res) => {
  try {
    const { email, password } = req.body;

    const hashPassword = await bcrypt.hash(password, SALT_ROUND);

    await User.create({
      email,
      password: hashPassword,
    });

    const token = await createToken(user.id);

    return res.status(201).redirect("/");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  register,
  login,
  biodata,
  history,
  createRegister,
};
