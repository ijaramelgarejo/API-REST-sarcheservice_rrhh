const express = require("express");
const router = express.Router();
const statusController = require("../controllers/status.controller");

router.get('/status', statusController.getAllStatus);
router.get('/status/:id', statusController.getOnStatus);
router.post('/status', statusController.createNewStatus);
router.patch('/status/:id', statusController.updateOneStatus);
router.delete('/status/:id', statusController.deleteOneStatus);

module.exports = router;