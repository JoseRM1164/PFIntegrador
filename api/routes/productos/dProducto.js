const express = require('express');
const router = express.Router();
let Productos = require('../../models/productos');

router.delete('/', async (req, res, next) => {
	try {
		let dID = req.query.invenID;
		await Productos.deleteOne({ _id: dID});

		res.status(200).json({
      success: true,
      message: "Eliminación exitosa",
    });
	} catch (err) {
		console.log(err);
		res.status(400).send(err);
	}
});

module.exports = router;