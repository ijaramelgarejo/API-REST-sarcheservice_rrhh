const modelStatusIncurred = require("../model/statusIncurred");


const getAllStatusIncurred = async (req, res) => { //Ver todos los estados de los incurridos
    try{
        const status = await modelStatusIncurred.getallstatusincurred();
        res.json(status);
        console.log(status);
    }catch(error){
        console.error("Error al obtener los estados del incurrido: ", error);
        res.status(500).json({error: "Error interno del servidor"});
    }
}; //Peticion parar rescatar todos los estados de los incurridos

const getOneStatusIncurred = async (req, res) => { //ver solo un estado incurrido
    const statusId = req.params.id;
    try{ 
        const status = await modelStatusIncurred.getstatusincurredById(statusId);
        if(!status){
            return res.status(404).json({error: 'Estado del incurrido no encontrado'});
        }
        res.json(status);
    }catch(error){
        console.log('Error al obtener el dato incurrido: ',error);
        res.status(500).json({error: 'Error interno en el servidor'});
    }
}; //Peticion parar rescatar un estado incurrido

const createNewStatusIncurred =  async (req, res) => { //Agregar status incurred
    const status = req.body;
console.log(status);
        try{
            const createstatus = await modelStatusIncurred.createstatusincurred(status);
            res.status(201).json(createstatus);

        } catch(error){
            console.error('Error al crear el estado del incurrido: ', error);
            res.status(500).json({error: 'Error interno del servidor'});
        }
};

const updateOneStatusIncurred = async (req, res) => { //Actualizar Usuarios
    const statusId = req.params.id;
    const statusData = req.body;
    console.log(statusData);
    try{
        const updatestatus = await modelStatusIncurred.updatestatusincurred(statusId, statusData);
        if(!updatestatus){
            return res.status(404).json({error: 'Estado del incurrido no encontrado'});
        }
        res.json(updatestatus);
    }catch(error){
        console.error('Error al actualizar el estado del incurrido: ', error);
        res.status(500).json({error: 'Error interno del servidor'});
    }
};

const deleteOneStatusIncurred = async (req, res) => { //Eliminar Usuarios
    const statusId = req.params.id;
    try{
        const deletedstatus = await modelStatusIncurred.deletestatusincurred(statusId);
        if(!deletedstatus){
            return res.status(400).json({error: 'Estado del incurrido no encontrado'});
        }
        res.json(deletedstatus);
    }catch(error){
        console.error('Error al eliminar el estado del incurrido: ',error);
        res.status(500).json({error: 'Error interno del servidor'});
    }
};

module.exports = {
    getAllStatusIncurred,
    getOneStatusIncurred,
    createNewStatusIncurred,
    updateOneStatusIncurred,
    deleteOneStatusIncurred,
}