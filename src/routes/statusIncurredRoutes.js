const express = require("express");
const router = express.Router();
const statusIncurredController = require("../controllers/statusincurred.controller");


router.get('/statusIncurred', statusIncurredController.getAllStatusIncurred);
router.get('/statusIncurred/:id', statusIncurredController.getOneStatusIncurred);
router.post('/statusIncurred', statusIncurredController.createNewStatusIncurred);
router.patch('/statusIncurred/:id', statusIncurredController.updateOneStatusIncurred);
router.delete('/statusIncurred/:id', statusIncurredController.deleteOneStatusIncurred);

module.exports = router; 