const { Router } = require("express");
const controller = require("../controllers/profiler.controller");
const requireAuth = require("../middlewares/auth.middleware");

const router = Router();

// get
router.get("/register", controller.register);
router.get("/login", controller.login);
router.get("/biodata", requireAuth, controller.biodata);
router.get("/biodata/add-biodata", controller.addBiodata);
router.get("/history", requireAuth, controller.history);
router.get("/history/add-history", controller.addHistory);

// post
router.post("/register-user", controller.createRegister);
router.post("/login-user", controller.createLogin);
router.post("/create-bio", controller.createBiodata);
router.post("/create-rekor", controller.createRekor);

// put
router.put("/biodata/:id", controller.updateBiodata);
router.put("/history/:id", controller.updateHistory);

module.exports = router;
