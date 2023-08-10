const express = require("express");
const router = express.Router();
const serviceController = require('../controllers/service.controller.js');


router.get('/service', serviceController.getAllservice);
router.get('/service/:id', serviceController.getOneservice);
router.post('/service', serviceController.createNewservice);
router.patch('/service/:id', serviceController.updateOneservice);
router.delete('/service/:id', serviceController.deleteOneservice);

module.exports = router; 