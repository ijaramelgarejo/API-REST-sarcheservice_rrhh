const express = require("express");
const router = express.Router();
const typepayController = require("../controllers/typePaymentValue.controller");


router.get('/typePaymentValue', typepayController.getAllTypePaymentValue);
router.get('/typePaymentValue/:id', typepayController.getOneTypePaymentValue);
router.post('/typePaymentValue', typepayController.createNewTypePaymentValue);
router.patch('/typePaymentValue/:id', typepayController.updateOneTypePaymentValue);
router.delete('/typePaymentValue/:id', typepayController.deleteOneTypePaymentValue);

module.exports = router; 