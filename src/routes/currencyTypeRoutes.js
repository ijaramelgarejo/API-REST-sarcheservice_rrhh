const express = require("express");
const router = express.Router();
const currencyController = require("../controllers/currencyType.controller");


router.get('/currencyType', currencyController.getAllCurrencyType);
router.get('/currencyType/:id', currencyController.getOneCurrencyType);
router.post('/currencyType', currencyController.createNewCurrencyType);
router.patch('/currencyType/:id', currencyController.updateOneCurrencyType);
router.delete('/currencyType/:id', currencyController.deleteOneCurrencyType);

module.exports = router; 