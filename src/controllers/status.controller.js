const statusService = require("../services/statusService");
const modelstatus = require("../model/status");

const getAllStatus = async (req, res) => { //Ver todos los Status
    try{
        const Status = await modelstatus.getallstatus();
        res.json(Status); 
    }catch(error){
        console.error("Error al obtener los status: ", error);
        res.status(500).json({error: "Error interno del servidor"});
    }
}; //Peticion parar rescatar todos los Status

const getOnStatus = async (req, res) => { //ver solo un estado
    const statusId = req.params.id;
    try{
        const Status = await modelstatus.getstatusbyId(statusId);
        if(!Status){
            return res.status(404).json({error: 'estado no se ha encontrado'});
        }
        res.json(Status);
    }catch(error){
        console.log('Error al obtener el status: ',error);
        res.status(500).json({error: 'Error interno en el servidor'});
    }
}; //Peticion parar rescatar un status

const createNewStatus = async (req, res) => { //Agregar status
    const StatusData = req.body;
        try{
            const createstatus = await modelstatus.createstatus(StatusData);
            res.status(201).json(createstatus);

        } catch(error){
            console.error('Error al crear el status: ', error);
            res.status(500).json({error: 'Error interno del servidor'});
        }
};

const updateOneStatus = async (req, res) => { //Actualizar status
    const statusId = req.params.id;
    const statusData = req.body;
    try{
        const updatestatus = await modelstatus.updatestatus(statusId, statusData);
        if(!updatestatus){
            return res.status(404).json({error: 'status no encontrado'});
        }
        res.json(updatestatus);
    }catch(error){
        console.error('Error al actualizar el status: ', error);
        res.status(500).json({error: 'Error interno del servidor'});
    }
};

const deleteOneStatus = async (req, res) => { //Eliminar status
    const userId = req.params.id;
    try{
        const deletedUser = await modelstatus.deletestatus(userId);
        if(!deletedUser){
            return res.status(400).json({error: 'status no se ha encontrado'});
        }
        res.json(deletedUser);
    }catch(error){
        console.error('Error al eliminar el status: ',error);
        res.status(500).json({error: 'Error interno del servidor'});
    }
};

module.exports = {
    getAllStatus,
    getOnStatus,
    createNewStatus,
    updateOneStatus,
    deleteOneStatus,
};