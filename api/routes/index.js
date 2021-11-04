let express = require('express');
let router = express.Router();
const jwt = require('../config/configJWT');

/* GET home page. */
router.get('/', jwt.checkJWT, (req, res, next) => {
  res.render('index', { title: 'TuNegocio' });
});

module.exports = router;
