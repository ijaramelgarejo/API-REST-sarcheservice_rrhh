const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.controller");


router.get('/users', usersController.getAllUsers);
router.get('/users/:id', usersController.getOneUsers);
router.post('/users', usersController.createNewUsers);
router.patch('/users/:id', usersController.updateOneUsers);
router.delete('/users/:id', usersController.deleteOneUsers);

module.exports = router; 