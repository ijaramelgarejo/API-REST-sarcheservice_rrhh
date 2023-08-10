const modelincurred = require('../model/incurred');


const getAllIncurred = async (req, res) => { //Ver todos los incurridos
    try{
        const users = await modelincurred.getallincurred();
        res.json(users);
        console.log(users);
    }catch(error){
        console.error("Error al obtener los incurred: ", error);
        res.status(500).json({error: "Error interno del servidor"}); 
    }
}; //Peticion parar rescatar todos los incurridos

const getOneIncurred = async (req, res) => { //ver solo un incurrido
    const userId = req.params.id;
    try{ 
        const user = await modelincurred.getincurredbyId(userId);
        if(!user){
            return res.status(404).json({error: 'Usuario no encontrado'});
        }
        res.json(user);
    }catch(error){
        console.log('Error al obtener el Usuario: ',error);
        res.status(500).json({error: 'Error interno en el servidor'});
    }
}; //Peticion parar rescatar un incurrido

const createNewIncurred =  async (req, res) => { //Agregar incurrido
    const { body } = req;
    
    console.log(body);
        if(
            !body.createDate ||
            !body.modifyDate ||
            !body.valued ||
            !body.user_id ||
            !body.serviceType_id ||
            !body.sgo ||
            !body.statusIncurred_id

        ){ 
            res.status(400).json({error: 'Faltan datos'});
        }
        const newIncurred = {
            createDate: body.createDate,
            modifyDate: body.modifyDate,
            valued: body.valued,
            user_id: body.user_id,
            serviceType_id: body.serviceType_id,
            sgo: body.sgo,
            statusIncurred_id: body.statusIncurred_id
        }
        try{
            const createusers = await modelincurred.createincurred(newIncurred);
            res.status(201).json(createusers);

        } catch(error){
            console.error('Error al crear el incurrido: ', error);
            res.status(500).json({error: 'Error interno del servidor'});
        }
};

const updateOneIncurred = async (req, res) => { //Actualizar incurred
    const incurredId = req.params.id;
    const incurredData = req.body;
    
    try{
        const updateUser = await modelincurred.updateincurred(incurredId, incurredData);
        if(!updateUser){
            return res.status(404).json({error: 'Incurrido no encontrado'});
        }
        res.json(updateUser);
    }catch(error){
        console.error('Error al actualizar el incurrido: ', error);
        res.status(500).json({error: 'Error interno del servidor'});
    }
};

const deleteOneIncurred = async (req, res) => { //Eliminar incurred
    const userId = req.params.id;
    try{
        const deletedUser = await modelincurred.deleteincurred(userId);
        if(!deletedUser){
            return res.status(400).json({error: 'Incurrido no encontrado'});
        }
        res.json(deletedUser);
    }catch(error){
        console.error('Error al eliminar el incurrido: ',error);
        res.status(500).json({error: 'Error interno del servidor'});
    }
};

module.exports = {
    getAllIncurred,
    getOneIncurred,
    createNewIncurred,
    updateOneIncurred,
    deleteOneIncurred,
}