const express = require("express");
const router = express.Router();
const jwt = require('../../config/configJWT');
const { body, validationResult } = require("express-validator");
let inventories = require("../../models/inventories");

router.post("/", [
  body("name").isString(),
  body("descripcion").isString()
],async (req, res, next) => {
  let errors = validationResult(req);
  let date = Date.now();
  if(!errors.isEmpty()) return res.status(400).json({ errors: errors.array()});
  try{
    let newInventory = new inventories({
      name: req.body.name,
      creationDate: date,
      descripcion: req.body.descripcion,
      lang: req.body.lang,
      uID: req.body.uID
    });

    let newAddition = await newInventory.save();

    res.status(200).json({
      newAddition,
      success: true,
      message: "Creación exitosa",
    });
  } catch (err) {
    console.log(err)
    res.status(400).send(err);
  }
});

module.exports = router;
