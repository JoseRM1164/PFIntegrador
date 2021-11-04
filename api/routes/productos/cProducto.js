const express = require("express");
const router = express.Router();
const jwt = require('../../config/configJWT');
const { body, validationResult } = require("express-validator");
let Producto = require("../../models/productos");

router.post("/", [
  body("name").isString(),
  body("cantindad").isNumeric(),
  body("caducidad").isString(),
  body("precio").isNumeric()
], async (req, res, next) => {
  let errors = validationResult(req);
  if(!errors.isEmpty()) return res.status(400).json({ errors: errors.array()});
  try{
    let newProducto= new Producto({
      name: req.body.name,
      cantindad: req.body.cantindad,
      caducidad: req.body.caducidad,
      precio: req.body.precio,
      invenID: req.body.invenID
    });
  
    let newProd = await newProducto.save();
   
    res.status(200).json({
      newProd,
      success: true,
      message: "Creación exitosa",
    });
  } catch (err) {
    console.log(err)
    res.status(400).send(err);
  }

});

module.exports = router;
