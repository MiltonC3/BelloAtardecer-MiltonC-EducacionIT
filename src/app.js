const express = require("express");
const app = express();

const path = require("path");
const cors = require("cors");
const hbs = require("hbs");
const morgan = require("morgan");
const signRouter = require("../router/userRouter");
const clientRouter = require("../router/clientRouter");
const adminRouter = require("../router/adminRouter");

app.use(cors());
app.use(morgan("dev"));
app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve("src/public")));

app.set("view engine", "hbs");
app.set("views", path.resolve("src/views"));
hbs.registerPartials(path.resolve("src/views/partials"));

app.use("/", signRouter);
app.use("/user", clientRouter, adminRouter);

module.exports = app;
