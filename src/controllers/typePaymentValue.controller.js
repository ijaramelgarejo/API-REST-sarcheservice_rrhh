const modeltypepay = require("../model/typePaymentValue");

const getAllTypePaymentValue = async (req, res) => { //Ver todos los typepay
    try{
        const typepay = await modeltypepay.getalltypepay();
        res.json(typepay);
        console.log(typepay);
    }catch(error){
        console.error("Error al obtener los valores de pago: ", error);
        res.status(500).json({error: "Error interno del servidor"});
    }
}; //Peticion parar rescatar todos los typepay

const getOneTypePaymentValue = async (req, res) => { //ver solo un TypepPay
    const typepayId = req.params.id;
    try{ 
        const typepay = await modeltypepay.gettypepayById(typepayId);
        if(!typepay){
            return res.status(404).json({error: 'Valores de pago no encontrado'});
        }
        res.json(typepay);
    }catch(error){
        console.log('Error al obtener el valor de pago: ',error);
        res.status(500).json({error: 'Error interno en el servidor'});
    }
}; //Peticion parar rescatar un TypepPay

const createNewTypePaymentValue =  async (req, res) => { //Agregar TypepPay
    const { body } = req;
    
    console.log(body);
        if(
            !body.name 
        ){ 
            res.status(400).json({error: 'Faltan datos'});
        }
        const typepayData = {
            name: body.name
        }
        try{
            const createtypepay = await modeltypepay.createtypepay(typepayData);
            res.status(201).json(createtypepay);

        } catch(error){
            console.error('Error al crear el valor de pago: ', error);
            res.status(500).json({error: 'Error interno del servidor'});
        }
};

const updateOneTypePaymentValue = async (req, res) => { //Actualizar Typepay
    const typepayId = req.params.id;
    const typepayData = req.body;
    console.log(typepayData);
    try{
        const updatetypepay = await modeltypepay.updatetypepay(typepayId, typepayData);
        if(!updatetypepay){
            return res.status(404).json({error: 'Valores de pago no encontrado'});
        }
        res.json(updatetypepay);
    }catch(error){
        console.error('Error al actualizar el valor de pago: ', error);
        res.status(500).json({error: 'Error interno del servidor'});
    }
};

const deleteOneTypePaymentValue = async (req, res) => { //Eliminar Usuarios
    const typepayId = req.params.id;
    try{
        const deletedtypepay= await modeltypepay.deletetypepay(typepayId);
        if(!deletedtypepay){
            return res.status(400).json({error: 'Valores de pago no encontrado'});
        }
        res.json(deletedtypepay);
    }catch(error){
        console.error('Error al eliminar el valor de pago: ',error);
        res.status(500).json({error: 'Error interno del servidor'});
    }
};

module.exports = {
    getAllTypePaymentValue,
    getOneTypePaymentValue,
    createNewTypePaymentValue,
    updateOneTypePaymentValue,
    deleteOneTypePaymentValue,
}