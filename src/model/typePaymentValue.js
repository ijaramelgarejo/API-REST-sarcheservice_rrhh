const DB = require('../../database/database.js');

const getalltypepay = async () => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('SELECT * FROM public.typepaymentvalue;');
        client.release();

        return result.rows;
    }catch(error){
        throw error;
    }
};

const gettypepayById = async (typepayId) => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('SELECT * FROM public.typepaymentvalue WHERE id = $1',[typepayId]);
        client.release();

        return result.rows[0];
    }catch(error){
        throw error;
    }
};

const createtypepay = async (typepayData) => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('INSERT INTO public.typepaymentvalue(name) VALUES ($1)',
        [ typepayData.name]
        );
        client.release();

        return result.rows[0];
    }catch(error){
        throw error;
    }
};

const updatetypepay = async (typepayId, typepayData) => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('UPDATE public.typepaymentvalue SET name=$1 WHERE id=$2 RETURNING *',
        [typepayData.typepayData, typepayId]);
        client.release();
        
        return result.rows[0];
    }catch(error){
        throw error;
    }
};

const deletetypepay = async (typepayId) => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('DELETE FROM public.typepaymentvalue WHERE id = $1 RETURNING *', [typepayId]);
        client.release();

        return result.rows[0];
    }catch(error){
        throw error;
    }
}
module.exports = {
    getalltypepay,
    gettypepayById,
    createtypepay,
    updatetypepay,
    deletetypepay,
}