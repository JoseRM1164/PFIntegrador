//Imports
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const app = express();


//Configuration file
require("dotenv").config();

//Mongoose set up
mongoose.connect(
  process.env.DBURL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Connection to mongo succeed");
  }
);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Middlewar}, () => {e
app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// Start of Routes
let indexRouter = require("./routes/index");
let cInventario = require("./routes/inventories/createInvetory");
let dInventario = require("./routes/inventories/deleteInventory");
let rInventario = require("./routes/inventories/readInventory");
let cProd = require("./routes/productos/cProducto");
let dProd = require("./routes/productos/dProducto");
let rProd = require("./routes/productos/rProductos");
let maxPrice = require("./routes/logica/maxPrice");
let maxProd = require("./routes/logica/maxProd");

app.use("/", indexRouter);
app.use("/api/cInven", cInventario);
app.use("/api/dInven", dInventario);
app.use("/api/rInven", rInventario);
app.use("/api/cProd", cProd);
app.use("/api/dProd", dProd);
app.use("/api/rProd", rProd);
app.use("/api/maxPrice", maxPrice);
app.use("/api/maxProd", maxProd);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
