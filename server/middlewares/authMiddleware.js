require("dotenv").config();
const jwt = require("jsonwebtoken");

const key = process.env.SECRET_KEY;

const authMiddleware = async (req, res, next) => {
  try {
    let token = req.headers["authorization"];
    if (token) {
      token = token.split(" ")[1];
      jwt.verify(token, key);
      next();
    } else {
      res.status(401).send({ error: "Please provide valid token!" });
    }
  } catch (error) {
    res.status(401).json({ error: "Unauthorized access" });
  }
};

module.exports = authMiddleware;
