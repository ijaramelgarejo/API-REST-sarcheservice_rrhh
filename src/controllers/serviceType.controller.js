const modelservType = require('../model/serviceType');


const getAllSerType = async (req, res) => { //Ver todos los tipo de servicio
    try{
        const servType = await modelservType.getalservtype();
        res.json(servType);
        console.log(servType);
    }catch(error){
        console.error("Error al obtener el tipo de servicio: ", error);
        res.status(500).json({error: "Error interno del servidor"});
    }
}; //Peticion parar rescatar todos los tipo de servicio

const getOneSerType = async (req, res) => { //ver solo un tipo de servicio
    const servtypeId = req.params.id;
    try{
        const servType = await modelservType.getservtypebyId(servtypeId);
        if(!servType){
            return res.status(404).json({error: 'Tipo de servicio no encontrado'});
        }
        res.json(servType);
    }catch(error){
        console.log('Error al obtener el tipo de servicio: ',error);
        res.status(500).json({error: 'Error interno en el servidor'});
    }
}; //Peticion parar rescatar un tipo de servicio

const createNewSerType = async (req, res) => { //Agregar tipo de servicio
    const { body } = req;
    
    console.log(body);
        if(
            !body.name ||
            !body.service_id ||
            !body.responsible_id ||
            !body.status_id 
        ){ 
            res.status(400).json({error: 'Faltan datos'});
        }
        const newserv = {
            name: body.name,
            service_id: body.service_id,
            responsible_id: body.responsible_id,
            status_id: body.status_id,
        }
    
        try{
            const createservtyp = await modelservType.createservtype(newserv);
            res.status(201).json(createservtyp);

        } catch(error){
            console.error('Error al crear el tipo de servicio: ', error);
            res.status(500).json({error: 'Error interno del servidor'});
        }
};

const updateOneSerType = async (req, res) => { //Actualizar tipo de servicio
    const servtypeId = req.params.id;
    const servtypeData = req.body;
    try{
        const updateservTyp = await modelservType.updateservtype(servtypeId, servtypeData);
        if(!updateservTyp){
            return res.status(404).json({error: 'Tipo de servicio no encontrado'});
        }
        res.json(updateservTyp);
    }catch(error){
        console.error('Error al actualizar el tipo de servicio: ', error);
        res.status(500).json({error: 'Error interno del servidor'});
    }
};

const deleteOneSerType = async (req, res) => { //Eliminar tipo de servicio
    const servtypeId1 = req.params.id;
    try{
        const deletedtypeservice = await modelservType.deleteservtype(servtypeId1);
        if(!deletedtypeservice){
            return res.status(400).json({error: 'Tipo de servicio no encontrado'});
        }
        res.json(deletedtypeservice);
    }catch(error){
        console.error('Error al eliminar el tipo de servicio: ',error);
        res.status(500).json({error: 'Error interno del servidor'});
    }
};

module.exports = {
    getAllSerType,
    getOneSerType,
    createNewSerType,
    updateOneSerType,
    deleteOneSerType,
}