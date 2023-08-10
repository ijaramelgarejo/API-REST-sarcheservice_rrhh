const DB = require('../../database/database.js');


const getallstatus = async () => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('SELECT * FROM public.status;');
        client.release();
 
        return result.rows;
    }catch(error){
        throw error;
    }
};

const getstatusbyId = async (statusId) => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('SELECT * FROM public.status WHERE id = $1',[statusId]);
        client.release();

        return result.rows[0];
    }catch(error){ 
        throw error;
    }
};

const createstatus = async (StatusData) => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('INSERT INTO public.status(name) VALUES ($1) RETURNING *',
        [ StatusData.name]
        );
        client.release();

        return result.rows[0];
    }catch(error){
        throw error;
    }
};

const updatestatus = async (statusId, statusData) => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('UPDATE public.status SET name=$1 WHERE id=$2 RETURNING *',
        [statusData.name, statusId]);
        client.release();
        
        return result.rows[0];
    }catch(error){
        throw error;
    }
};

const deletestatus = async (statusId) => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('DELETE FROM public.status WHERE id = $1 RETURNING *', [statusId]);
        client.release();

        return result.rows[0];
    }catch(error){
        throw error;
    }
}


module.exports = {
    getallstatus,
    getstatusbyId,
    createstatus,
    updatestatus,
    deletestatus,
}