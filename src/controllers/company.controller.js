const modelCompany = require('../model/company.js');

const getAllCompany = async (req, res) => { //Ver todos los Company
    try{
        const company = await modelCompany.getallcompany(); 
        res.json(company);
        console.log(company);
    }catch(error){
        console.error("Error al obtener las compañias: ", error);
        res.status(500).json({error: "Error interno del servidor"});
    }
}; //Peticion parar rescatar todos los Company

const getOneCompany = async (req, res) => { //ver solo una compañia
    const companyId = req.params.id;
    try{
        const company = await modelCompany.getcompanybyId(companyId);
        if(!company){
            return res.status(404).json({error: 'compañia no encontrada'});
        }
        res.json(company);
    }catch(error){
        console.log('Error al obtener las compañias: ',error);
        res.status(500).json({error: 'Error interno en el servidor'});
    }
}; //Peticion parar rescatar una compañia

const createNewCompany = async (req, res) => { //Agregar Compañias
    const { body } = req;
    
    console.log(body);
        if(
            !body.businessName ||
            !body.rut ||
            !body.dv ||
            !body.giro ||
            !body.status_id 
        ){ 
            res.status(400).json({error: 'Faltan datos'});
        }
        const newCompany = {
            businessName: body.businessName,
            rut: body.rut,
            dv: body.dv,
            giro: body.giro,
            status_id: body.status_id
        }
    
        try{
            const createcompany = await modelCompany.createcompany(newCompany);
            res.status(201).json(createcompany);

        } catch(error){
            console.error('Error al crear la compañia: ', error);
            res.status(500).json({error: 'Error interno del servidor'});
        }
};

const updateOneCompany = async (req, res) => { //Actualizar Compañias
    const companyId = req.params.id;
    const companyData = req.body;
    try{
        const updatecompany = await modelCompany.updatecompany(companyId, companyData);
        if(!updatecompany){
            return res.status(404).json({error: 'Compañia no se ha encontrado'});
        }
        res.json(updatecompany);
    }catch(error){
        console.error('Error al actualizar la compañia: ', error);
        res.status(500).json({error: 'Error interno del servidor'});
    }
};

const deleteOneCompany = async (req, res) => { //Eliminar Usuarios
    const companyId = req.params.id;
    try{
        const deletedcompany = await modelCompany.deletecompany(companyId);
        if(!deletedcompany){
            return res.status(400).json({error: 'Compañia no se ha encontrado'});
        }
        res.json(deletedcompany);
    }catch(error){
        console.error('Error al eliminar la compañia: ',error);
        res.status(500).json({error: 'Error interno del servidor'});
    }
};


module.exports = {
    getAllCompany,
    getOneCompany,
    createNewCompany,
    updateOneCompany,
    deleteOneCompany,
}