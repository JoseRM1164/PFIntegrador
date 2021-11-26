const express = require('express');
const router = express.Router();

let Reporte = require('../../models/reportes');

router.get('/', async (req, res) => {

    let query = req.query.query;
	Reporte.aggregate([
		{
			query
        }
	], (err, result) => {
			if(err) res.status(400);
			res.json(result);	
		}
	);
});

module.exports = router;
