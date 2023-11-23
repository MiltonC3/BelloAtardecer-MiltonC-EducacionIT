const { Router } = require("express");
const router = Router();

const { admin } = require("../controllers/adminController");

router.get("/admin", admin);

module.exports = router;
