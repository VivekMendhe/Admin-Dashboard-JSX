require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./routers/router");

const app = express();
const PORT = 3033;
const url = process.env.MONGOOSE_URL;

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.disable("x-powered-by");

mongoose
  .connect(url)
  .then(() => console.log("Connected to database"))
  .catch(() => console.error("Error connecting to database"));

app.use("/api", router);

app.all("/*", async (req, res) => {
  const message = `Route '${req.originalUrl}' is not found`;
  res.status(404).send({ message });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
