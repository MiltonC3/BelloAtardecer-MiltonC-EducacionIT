const { Router } = require("express");
const router = Router();
const { check } = require("express-validator");
const {
    login,
    signup,
    userRegister,
    userLogin,
} = require("../controllers/userController");

router.get("/signin", login);
router.get("/signup", signup);

router.post(
    "/register",
    [
        check("nombre").isLength({ min: 4 }),
        check("email").isEmail(),
        check("password").isLength({ min: 6, max: 10 }),
    ],
    userRegister
);

router.post(
    "/signin",
    [check("email").isEmail(), check("password").isLength({ min: 8 })],
    userLogin
);

module.exports = router;
