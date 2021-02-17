var express = require('express');
var router = express.Router();

const rajaOngkirController = require('../src/domain/controller/rajaOngkirController');

const rajaOngkirControllerInit = new rajaOngkirController();

/* GET users listing. */
router.get('/', rajaOngkirControllerInit.getDataProvince);

module.exports = router;
