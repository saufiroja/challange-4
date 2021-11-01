const { APP_SECRET } = process.env;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User.Model");
const Biodata = require("../models/Biodata.Model");
const History = require("../models/History.Model");
// create token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, APP_SECRET, { expiresIn: maxAge });
};

const register = (req, res) => {
  return res.render("register");
};

const login = (req, res) => {
  return res.render("login");
};

const biodata = async (req, res) => {
  const data = await Biodata.findAll();
  return res.render("biodata", {
    data,
  });
};

const history = async (req, res) => {
  const data = await History.findAll();
  return res.render("history", {
    data,
  });
};

const addBiodata = (req, res) => {
  return res.render("add-biodata");
};

const addHistory = (req, res) => {
  return res.render("add-history");
};

// create user register
const createRegister = async (req, res) => {
  try {
    const { email, password } = req.body;

    const hashPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      email,
      password: hashPassword,
    });

    const token = await createToken(user.id);
    res.cookie("jwt", token, { maxAge: maxAge * 1000, httpOnly: true });

    return res.status(201).redirect("/");
  } catch (error) {
    console.log(message.error);
  }
};

// create user login
const createLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: {
        email,
      },
    });

    await bcrypt.compare(password, user.password);

    const token = await createToken(user.id);
    res.cookie("jwt", token, { maxAge: maxAge * 1000, httpOnly: true });

    return res.status(201).redirect("/");
  } catch (error) {
    console.log(message.error);
  }
};

// create biodata
const createBiodata = async (req, res) => {
  try {
    const { name, description } = req.body;

    await Biodata.create({
      name,
      description,
    });

    return res.status(301).redirect("/biodata");
  } catch (error) {
    console.log(error);
  }
};

const createRekor = async (req, res) => {
  try {
    const { win, lose } = req.body;

    await History.create({
      win,
      lose,
    });

    return res.status(301).redirect("/history");
  } catch (error) {
    console.log(error);
  }
};

// update biodata
const updateBiodata = async (req, res) => {
  try {
    const {id} = req.params;
    const {name, description} = req.body;
    const data = await Biodata.update({
     name,
     description
    },
    {
      where: {
        id
      }
    });
    res.json({
      "msg": "Biodata Updated"
    })
  } catch (error) {
    console.log(error)
  }
}

// update history
const updateHistory = async (req, res) => {
  try {
    const {id} = req.params;
    const data = await Biodata.update({
      where: {
        id
      }
    });
    res.json({
      "msg": "History Updated"
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  register,
  login,
  biodata,
  history,
  createRegister,
  createLogin,
  createBiodata,
  addBiodata,
  createRekor,
  addHistory,
  updateBiodata,
  updateHistory
};
