const { Router } = require("express");
const controller = require("../controllers/profiler.controller");

const router = Router();

// get
router.get("/register", controller.register);
router.get("/login", controller.login);
router.get("/biodata", controller.biodata);
router.get("/history", controller.history);

// post
router.post("/register-user", controller.createRegister);

module.exports = router;
