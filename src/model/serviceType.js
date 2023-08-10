const DB = require('../../database/database');

const getalservtype = async () => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('SELECT * FROM public.servicetype');
        client.release();
 
        return result.rows;
    }catch(error){
        throw error;
    }
};

const getservtypebyId = async (servtypeId) => { 
    try{
        const client = await DB.pool.connect();
        const result = await client.query('SELECT * FROM public.serviceType WHERE id = $1',[servtypeId]);
        client.release();

        return result.rows[0];
    }catch(error){
        throw error;
    }
};

const createservtype = async (servtypData) => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('INSERT INTO public.serviceType(name,service_id,responsible_id,status_id) VALUES ($1, $2, $3, $4) RETURNING *',
        [ servtypData.name, servtypData.service_id, servtypData.responsible_id, servtypData.status_id]
        );
        client.release();

        return result.rows[0];
    }catch(error){
        throw error;
    }
};

const updateservtype = async (servtypeId, servtypeData) => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('UPDATE public.serviceType SET name=$1, service_id=$2, responsible_id=$3, status_id=$4 WHERE id=$5 RETURNING *',
        [servtypeData.name, servtypeData.service_id, servtypeData.responsible_id, servtypeData.status_id, servtypeId]);
        client.release();
        
        return result.rows[0];
    }catch(error){
        throw error;
    }
};

const deleteservtype = async (servtypeId) => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('DELETE FROM public.serviceType WHERE id = $1 RETURNING *', [servtypeId]);
        client.release();

        return result.rows[0];
    }catch(error){
        throw error;
    }
};


module.exports = {
    getalservtype,
    getservtypebyId,
    createservtype,
    updateservtype,
    deleteservtype,
}