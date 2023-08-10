const modelcurency = require("../model/currencyType");

const getAllCurrencyType = async (req, res) => { //Ver todos los Currency
    try{
        const currency = await modelcurency.getallcurrencytype();
        res.json(currency);
        console.log(currency);
    }catch(error){
        console.error("Error al obtener los tipos de cambio monetario: ", error);
        res.status(500).json({error: "Error interno del servidor"});
    }
}; //Peticion parar rescatar todos los Currency

const getOneCurrencyType = async (req, res) => { //ver solo un Currency
    const currencyId = req.params.id;
    try{ 
        const currency = await modelcurency.getcurrencytypeById(currencyId);
        if(!currency){
            return res.status(404).json({error: 'tipos de cambio monetario no encontrado'});
        }
        res.json(currency);
    }catch(error){
        console.log('Error al obtener los tipos de cambio monetario: ',error);
        res.status(500).json({error: 'Error interno en el servidor'});
    }
}; //Peticion parar rescatar un Currency

const createNewCurrencyType =  async (req, res) => { //Agregar Currency
    const data = req.body;
    console.log(data);
    
        try{
            const createcurrency = await modelcurency.createcurrencytype(data);
            res.status(201).json(createcurrency);

        } catch(error){
            console.error('Error al crear el tipo de cambio monetario: ', error);
            res.status(500).json({error: 'Error interno del servidor'});
        }
};

const updateOneCurrencyType = async (req, res) => { //Actualizar Currency
    const currencyId = req.params.id;
    const currencyData = req.body;
    console.log(currencyData);
    try{
        const updatecurrency = await modelcurency.updatecurrencytype(currencyId, currencyData);
        if(!updatecurrency){
            return res.status(404).json({error: 'El tipo de cambio monetario no se ha encontrado'});
        }
        res.json(updatecurrency);
    }catch(error){
        console.error('Error al actualizar el tipo de cambio monetario: ', error);
        res.status(500).json({error: 'Error interno del servidor'});
    }
};

const deleteOneCurrencyType = async (req, res) => { //Eliminar Currency
    const currencyId = req.params.id;
    try{
        const deletedcurrency = await modelcurency.deletecurrencytype(currencyId);
        if(!deletedcurrency){
            return res.status(400).json({error: 'El tipo de cambio monetario no se ha encontrado'});
        }
        res.json(deletedcurrency);
    }catch(error){
        console.error('Error al eliminar el tipo de cambio monetario: ',error);
        res.status(500).json({error: 'Error interno del servidor'});
    }
};

module.exports = {
    getAllCurrencyType,
    getOneCurrencyType,
    createNewCurrencyType,
    updateOneCurrencyType,
    deleteOneCurrencyType,
}