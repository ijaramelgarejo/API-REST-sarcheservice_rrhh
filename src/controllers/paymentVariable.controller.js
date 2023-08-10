const modelpayment = require("../model/paymentVariable");

const getAllPaymentVariable = async (req, res) => { //Ver todos los payment
    try{
        const payment = await modelpayment.getallpaymentvariable();
        res.json(payment);
        console.log(payment);
    }catch(error){
        console.error("Error al obtener los payment: ", error);
        res.status(500).json({error: "Error interno del servidor"});
    }
}; //Peticion parar rescatar todos los payment

const getOnePaymentVariable = async (req, res) => { //ver solo un payment
    const paymentId = req.params.id;
    try{ 
        const payment = await modelpayment.getpaymentvariablebyId(paymentId);
        if(!payment){
            return res.status(404).json({error: 'Payment no encontrado'});
        }
        res.json(payment);
    }catch(error){
        console.log('Error al obtener el payment: ',error);
        res.status(500).json({error: 'Error interno en el servidor'});
    }
}; //Peticion parar rescatar un payment

const createNewPaymentVariable =  async (req, res) => { //Agregar payment
    const { body } = req;
    
    console.log(body);
        if(
            !body.value ||
            !body.createDate ||
            !body.endDate ||
            !body.typePaymentValue_id ||
            !body.isWorkDay ||
            !body.currencyType_id 
        ){ 
            res.status(400).json({error: 'Faltan datos'});
        }
        const paymentData = {
            value: body.value,
            createDate: body.createDate,
            endDate: body.endDate,
            typePaymentValue_id: body.typePaymentValue_id,
            isWorkDay: body.isWorkDay,
            currencyType_id: body.currencyType_id,
        }
        try{
            const createpayment = await modelpayment.createpaymentvariable(paymentData);
            res.status(201).json(createpayment);

        } catch(error){
            console.error('Error al crear el payment: ', error);
            res.status(500).json({error: 'Error interno del servidor'});
        }
};

const updateOnePaymentVariable = async (req, res) => { //Actualizar payment Variable
    const paymentId = req.params.id;
    const paymentData = req.body;
    console.log(paymentData);
    try{
        const updatepayment = await modelpayment.updatepaymentvariable(paymentId, paymentData);
        if(!updatepayment){
            return res.status(404).json({error: 'Payment no encontrado'});
        }
        res.json(updatepayment);
    }catch(error){
        console.error('Error al actualizar el payment: ', error);
        res.status(500).json({error: 'Error interno del servidor'});
    }
};

const deleteOnePaymentVariable = async (req, res) => { //Eliminar Usuarios
    const paymentId = req.params.id;
    try{
        const deletedpayment = await modelpayment.deletepaymentvariable(paymentId);
        if(!deletedpayment){
            return res.status(400).json({error: 'Payment no encontrado'});
        }
        res.json(deletedpayment);
    }catch(error){
        console.error('Error al eliminar el payment: ',error);
        res.status(500).json({error: 'Error interno del servidor'});
    }
};

module.exports = {
    getAllPaymentVariable,
    getOnePaymentVariable,
    createNewPaymentVariable,
    updateOnePaymentVariable,
    deleteOnePaymentVariable,
}
