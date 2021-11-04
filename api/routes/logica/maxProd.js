const express = require('express');
const router = express.Router();

let Inventarios = require('../../models/inventories');

router.get('/', async (req, res) => {
	Inventarios.aggregate([
		{
			$project: {
				"_id": {
					"$toString": "$_id"
				}
			}
		},
		{
			$lookup: {
				from: "Productos",
				localField: "_id",
				foreignField: "invenID",
				as: "prods"
			}
		},
		{
			$project: {
				name: 1,
				totalUniqueProducts: {$size: "$prods"}
			}
		}
	], (err, result) => {
			if(err) res.status(400);
			res.json(result);	
		}
	);
});

module.exports = router;