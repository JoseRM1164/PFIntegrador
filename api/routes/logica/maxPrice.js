const express = require('express');
const router = express.Router();

let Productos = require('../../models/productos');

router.get('/', async (req, res) => {
	Productos.aggregate([
		{
			$group: {
				_id: "$invenID",
				sumTotal: {
					$sum: {
						$multiply: ["$cantindad", "$precio"]
					}
				}
			}
		}
	], (err, result) => {
			if(err) res.status(400);
			res.json(result);	
		}
	);
});

module.exports = router;