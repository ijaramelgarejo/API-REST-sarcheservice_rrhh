const express = require("express");
const router = express.Router();
const companyController = require("../controllers/company.controller");

router.get('/company', companyController.getAllCompany);
router.get('/company/:id', companyController.getOneCompany);
router.post('/company', companyController.createNewCompany);
router.patch('/company/:id', companyController.updateOneCompany);
router.delete('/company/:id', companyController.deleteOneCompany);
 
module.exports = router;