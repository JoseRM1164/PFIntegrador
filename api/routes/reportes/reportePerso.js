const express = require('express');
const router = express.Router();

let Reporte = require('../../models/reportes');

router.get('/', async (req, res) => {
	Reporte.aggregate([
		{
			$project: {name:1,descripcion:1}
        }
	], (err, result) => {
			if(err) res.status(400);
			res.json(result);	
		}
	);
});

module.exports = router;
