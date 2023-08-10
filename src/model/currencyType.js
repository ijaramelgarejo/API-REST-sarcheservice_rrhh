const DB = require('../../database/database.js');

const getallcurrencytype = async () => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('SELECT * FROM public.currencytype;');
        client.release();

        return result.rows;
    }catch(error){
        throw error;
    }
};

const getcurrencytypeById = async (currencyId) => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('SELECT * FROM public.currencytype WHERE id = $1',[currencyId]);
        client.release();

        return result.rows[0];
    }catch(error){
        throw error;
    }
};

const createcurrencytype = async (currencyData) => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('INSERT INTO public.currencytype(name) VALUES ($1)',
        [ currencyData.name]
        );
        client.release();

        return result.rows[0];
    }catch(error){
        throw error;
    }
};

const updatecurrencytype = async (currencyId, currencyData) => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('UPDATE public.currencytype SET name=$1 WHERE Id=$2 RETURNING *',
        [currencyData.name, currencyId]);
        client.release();
        
        return result.rows[0];
    }catch(error){
        throw error;
    }
};

const deletecurrencytype = async (currencyId) => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('DELETE FROM public.currencytype WHERE id = $1 RETURNING *', [currencyId]);
        client.release();

        return result.rows[0];
    }catch(error){
        throw error;
    }
}

module.exports = {
    getallcurrencytype,
    getcurrencytypeById,
    createcurrencytype,
    updatecurrencytype,
    deletecurrencytype,
}