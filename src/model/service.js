const DB = require('../../database/database.js');

const getallservice = async () => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('SELECT * FROM public.service;');
        client.release();
 
        return result.rows;
    }catch(error){
        throw error;
    }
};

const getservicebyId = async (serviceId) => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('SELECT * FROM public.service WHERE id = $1',[serviceId]);
        client.release();

        return result.rows[0];
    }catch(error){
        throw error;
    }
};

const createservice = async (serviceData) => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('INSERT INTO public.service(name,status_id,company_id) VALUES ($1, $2, $3) RETURNING *',
        [ serviceData.name, serviceData.status_id, serviceData.company_id]
        );
        client.release();

        return result.rows[0];
    }catch(error){
        throw error;
    }
};

const updateservice = async (serviceId, serviceData) => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('UPDATE public.service SET name=$1, status_id=$2, company_id=$3 WHERE id=$4 RETURNING *',
        [serviceData.name, serviceData.status_id, serviceData.company_id, serviceId]);
        client.release();
        
        return result.rows[0];
    }catch(error){
        throw error;
    }
};

const deleteservice = async (serviceId) => { 
    try{
        const client = await DB.pool.connect();
        const result = await client.query('DELETE FROM public.service WHERE id = $1 RETURNING *', [serviceId]);
        client.release();

        return result.rows[0];
    }catch(error){
        throw error;
    }
};

module.exports = {
    getallservice,
    getservicebyId,
    createservice,
    updateservice,
    deleteservice,
}