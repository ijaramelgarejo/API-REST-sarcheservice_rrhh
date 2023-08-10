const modelUser = require("../model/users.js");
const express = require('express');

const getAllUsers = async (req, res) => { //Ver todos los Usuarios
    try{
        const users = await modelUser.getAllUsers();
        res.json(users);
        console.log(users);
    }catch(error){
        console.error("Error al obtener los usuarios: ", error);
        res.status(500).json({error: "Error interno del servidor"});
    }
}; //Peticion parar rescatar todos los Usuarios

const getOneUsers = async (req, res) => { //ver solo un Usuarios
    const userId = req.params.id;
    try{ 
        const user = await modelUser.getUserById(userId);
        if(!user){
            return res.status(404).json({error: 'Usuario no encontrado'});
        }
        res.json(user);
    }catch(error){
        console.log('Error al obtener el Usuario: ',error);
        res.status(500).json({error: 'Error interno en el servidor'});
    }
}; //Peticion parar rescatar un Usuario

const createNewUsers =  async (req, res) => { //Agregar Usuarios
    const { body } = req;
    
    console.log(body);
        if(
            !body.name ||
            !body.lastName ||
            !body.rut ||
            !body.dv ||
            !body.email ||
            !body.status_id 
        ){ 
            res.status(400).json({error: 'Faltan datos'});
        }
        const newUser = {
            name: body.name,
            lastName: body.lastName,
            rut: body.rut,
            dv: body.dv,
            email: body.email,
            status_id: body.status_id,
        }
        try{
            const createusers = await modelUser.createUser(newUser);
            res.status(201).json(createusers);

        } catch(error){
            console.error('Error al crear el usuario: ', error);
            res.status(500).json({error: 'Error interno del servidor'});
        }
};

const updateOneUsers = async (req, res) => { //Actualizar Usuarios
    const userId = req.params.id;
    const userData = req.body;
    try{
        const updateUser = await modelUser.updateUser(userId, userData);
        if(!updateUser){
            return res.status(404).json({error: 'Usuario no encontrado'});
        }
        res.json(updateUser);
    }catch(error){
        console.error('Error al actualizar el usuario: ', error);
        res.status(500).json({error: 'Error interno del servidor'});
    }
};

const deleteOneUsers = async (req, res) => { //Eliminar Usuarios
    const userId = req.params.id;
    try{
        const deletedUser = await modelUser.deleteUser(userId);
        if(!deletedUser){
            return res.status(400).json({error: 'Usuario no encontrado'});
        }
        res.json(deletedUser);
    }catch(error){
        console.error('Error al eliminar el usuario: ',error);
        res.status(500).json({error: 'Error interno del servidor'});
    }
};

module.exports = {
    getAllUsers,
    getOneUsers,
    createNewUsers,
    updateOneUsers,
    deleteOneUsers,
};