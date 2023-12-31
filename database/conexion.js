const mongoose = require("mongoose");
require("dotenv").config();

const MONGOLOCAL = process.env.MONGO_URL_LOCAL;
const MONGOATLAS = process.env.MONGO_URL_ATLAS;

const conexion = mongoose
    .connect(MONGOATLAS, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Conexion a la base de datos establecida con exito");
    })
    .catch((err) => console.log(err));

module.exports = conexion;
