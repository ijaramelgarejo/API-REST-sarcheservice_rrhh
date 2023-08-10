const express = require("express");
const router = express.Router();
const incurredController = require("../controllers/incurred.controller");


router.get('/incurred', incurredController.getAllIncurred);
router.get('/incurred/:id', incurredController.getOneIncurred);
router.post('/incurred', incurredController.createNewIncurred);
router.patch('/incurred/:id', incurredController.updateOneIncurred);
router.delete('/incurred/:id', incurredController.deleteOneIncurred);


module.exports = router; 