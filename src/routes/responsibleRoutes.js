const express = require("express");
const router = express.Router();
const responsibleController = require("../controllers/responsible.controller");


router.get('/responsible', responsibleController.getAllResponsible);
router.get('/responsible/:id', responsibleController.getOneResponsible);
router.post('/responsible', responsibleController.createNewResponsible);
router.patch('/responsible/:id', responsibleController.updateOneResponsible);
router.delete('/responsible/:id', responsibleController.deleteOneResponsible);

module.exports = router; 