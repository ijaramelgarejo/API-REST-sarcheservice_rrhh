const modelresponsible = require('../model/responsible');


const getAllResponsible = async (req, res) => { //Ver todos los responsables
    try{
        const responsible = await modelresponsible.getallresponsible();
        res.json(responsible);
        console.log(responsible);
    }catch(error){
        console.error("Error al obtener el responsable: ", error);
        res.status(500).json({error: "Error interno del servidor"});
    }
}; //Peticion parar rescatar todos los responsables

const getOneResponsible = async (req, res) => { //ver solo un responsible
    const responsibleId = req.params.id;
    try{
        const responsible = await modelresponsible.getresponsibleById(responsibleId);
        if(!responsible){
            return res.status(404).json({error: 'Responsable no encontrado'});
        }
        res.json(responsible);
    }catch(error){
        console.log('Error al obtener el rsponsable: ',error);
        res.status(500).json({error: 'Error interno en el servidor'});
    }
}; //Peticion parar rescatar un responsible

const createNewResponsible = async (req, res) => { //Agregar responsable
    const { body } = req;
    
    console.log(body);
        if(
            !body.name ||
            !body.lastName ||
            !body.email ||
            !body.rut ||
            !body.dvRut ||
            !body.status_id 
        ){ 
            res.status(400).json({error: 'Faltan datos'});
        }
        const newResponsible = {
            name: body.name,
            lastName: body.lastName,
            email: body.email,
            rut: body.rut,
            dvRut: body.dvRut,
            status_id: body.status_id,
        }
        try{
            const createrespons = await modelresponsible.createresponsible(newResponsible);
            res.status(201).json(createrespons);

        } catch(error){
            console.error('Error al crear el responsable: ', error);
            res.status(500).json({error: 'Error interno del servidor'});
        }
};

const updateOneResponsible = async (req, res) => { //Actualizar responsable
    const responsibleId = req.params.id;
    const responsibleData = req.body;
    try{
        const updateresp = await modelresponsible.updateresponsible(responsibleId, responsibleData);
        if(!updateresp){
            return res.status(404).json({error: 'Responsable no encontrado'});
        }
        res.json(updateresp);
    }catch(error){
        console.error('Error al actualizar el responsable: ', error);
        res.status(500).json({error: 'Error interno del servidor'});
    }
};

const deleteOneResponsible = async (req, res) => { //Eliminar responsable
    const responsibleId = req.params.id;
    try{
        const deletedresp = await modelresponsible.deleteresponsible(responsibleId);
        if(!deletedresp){
            return res.status(400).json({error: 'Responsable no encontrado'});
        }
        res.json(deletedresp);
    }catch(error){
        console.error('Error al eliminar el responsable: ',error);
        res.status(500).json({error: 'Error interno del servidor'});
    }
};
module.exports = {
    getAllResponsible,
    getOneResponsible,
    createNewResponsible,
    updateOneResponsible,
    deleteOneResponsible,

}