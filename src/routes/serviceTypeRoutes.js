const express = require("express");
const router = express.Router();
const servTypeController = require("../controllers/serviceType.controller");


router.get('/serviceType', servTypeController.getAllSerType);
router.get('/serviceType/:id', servTypeController.getOneSerType);
router.post('/serviceType', servTypeController.createNewSerType);
router.patch('/serviceType/:id', servTypeController.updateOneSerType);
router.delete('/serviceType/:id', servTypeController.deleteOneSerType);

module.exports = router; 