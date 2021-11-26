const express = require('express');
const router = express.Router();

let Reporte = require('../../models/getReporte');

router.get('/', async (req, res) => {
	Reporte.project([
		{
			name:1 , descripcion : 1
        }
	], (err, result) => {
			if(err) res.status(400);
			res.json(result);	
		}
	);
});

module.exports = router;
