const DB = require('../../database/database.js');

const getallstatusincurred = async () => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('SELECT * FROM public.statusincurred;');
        client.release();

        return result.rows;
    }catch(error){
        throw error;
    }
};
const getstatusincurredById = async (statusId) => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('SELECT * FROM public.statusincurred WHERE id = $1',[statusId]);
        client.release();

        return result.rows[0];
    }catch(error){
        throw error;
    }
};

const createstatusincurred = async (statusData) => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('INSERT INTO public.statusincurred(name) VALUES ($1)',
        [ statusData.name]
        );
        client.release();

        return result.rows[0];
    }catch(error){
        throw error;
    }
};

const updatestatusincurred = async (statusId, statusData) => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('UPDATE public.statusincurred SET name=$1 WHERE id=$2 RETURNING *',
        [statusData.name, statusId]);
        client.release();
        
        return result.rows[0];
    }catch(error){
        throw error;
    }
};

const deletestatusincurred = async (userId) => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('DELETE FROM public.statusincurred WHERE id = $1 RETURNING *', [userId]);
        client.release();

        return result.rows[0];
    }catch(error){
        throw error;
    }
};

module.exports = {
    getallstatusincurred,
    getstatusincurredById,
    createstatusincurred,
    updatestatusincurred,
    deletestatusincurred,
}