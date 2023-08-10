const modelservice = require('../model/service.js');

const getAllservice = async (req, res) => { //Ver todos los servicios
    try{
        const service = await modelservice.getallservice();
        res.json(service);
        console.log(service);
    }catch(error){
        console.error("Error al obtener los servicios: ", error);
        res.status(500).json({error: "Error interno del servidor"});
    }
}; //Peticion parar rescatar todos los servicios

const getOneservice = async (req, res) => { //ver solo un servicio
    const serviceId = req.params.id;
    try{
        const service = await modelservice.getservicebyId(serviceId);
        if(!service){
            return res.status(404).json({error: 'Servicio no encontrado'});
        }
        res.json(service);
    }catch(error){
        console.log('Error al obtener el Servicio: ',error);
        res.status(500).json({error: 'Error interno en el servidor'});
    }
}; //Peticion parar rescatar un servicio

const createNewservice = async (req, res) => { //Agregar servicios
    const { body } = req;
    
    console.log(body);
        if(
            !body.name ||
            !body.status_id ||
            !body.company_id 
        ){ 
            res.status(400).json({error: 'Faltan datos'});
        }
        const newservice = {
            name: body.name,
            status_id: body.status_id,
            company_id: body.company_id,
        }
    
        try{
            const createservice = await modelservice.createservice(newservice);
            res.status(201).json(createservice);

        } catch(error){
            console.error('Error al crear el servicio: ', error);
            res.status(500).json({error: 'Error interno del servidor'});
        }
};

const updateOneservice = async (req, res) => { //Actualizar Servicios
    const serviceId = req.params.id;
    const serviceData = req.body;
    try{
        const updateservice = await modelservice.updateservice(serviceId, serviceData);
        if(!updateservice){
            return res.status(404).json({error: 'Servicio no encontrado'});
        }
        res.json(updateservice);
    }catch(error){
        console.error('Error al actualizar el servicio: ', error);
        res.status(500).json({error: 'Error interno del servidor'});
    }
};

const deleteOneservice = async (req, res) => { //Eliminar Servicios
    const serviceId = req.params.id;
    try{
        const deletedservice = await modelservice.deleteservice(serviceId);
        if(!deletedservice){
            return res.status(400).json({error: 'Servicio no encontrado'});
        }
        res.json(deletedservice);
    }catch(error){
        console.error('Error al eliminar el servicio: ',error);
        res.status(500).json({error: 'Error interno del servidor'});
    }
};


module.exports = {
    getAllservice,
    getOneservice,
    createNewservice,
    updateOneservice,
    deleteOneservice,
}