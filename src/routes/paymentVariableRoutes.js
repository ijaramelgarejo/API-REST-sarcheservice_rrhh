const express = require("express");
const router = express.Router();
const paymentVariableController = require("../controllers/paymentVariable.controller");


router.get('/paymentVariable', paymentVariableController.getAllPaymentVariable);
router.get('/paymentVariable/:id', paymentVariableController.getOnePaymentVariable);
router.post('/paymentVariable', paymentVariableController.createNewPaymentVariable);
router.patch('/paymentVariable/:id', paymentVariableController.updateOnePaymentVariable);
router.delete('/paymentVariable/:id', paymentVariableController.deleteOnePaymentVariable);

module.exports = router; 