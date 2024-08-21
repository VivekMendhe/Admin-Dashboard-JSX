const { Router } = require("express");
const { signup, signin } = require("../controllers/user.controller");

const router = Router();

/** user api */
/** http://localhost:3033/api/signup
 {
    "email": "user@gmail.com",
    "password": "12345678",
 }
 */
router.route("/signup").post(signup);

/** http://localhost:3033/api/signup
 {
    "email": "user@gmail.com",
    "password": "12345678",
 }
 */
router.route("/signin").post(signin);

module.exports = router;
