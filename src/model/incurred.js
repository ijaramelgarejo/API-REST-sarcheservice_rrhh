const DB = require('../../database/database.js');

const getallincurred = async () => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('SELECT * FROM public.incurred;');
        client.release();
 
        return result.rows;
    }catch(error){ 
        throw error;
    }
};

const getincurredbyId = async (incurredId) => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('SELECT * FROM public.incurred WHERE id = $1',[incurredId]);
        client.release();

        return result.rows[0];
    }catch(error){
        throw error;
    }
};

const createincurred = async (incurredData) => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('INSERT INTO public.incurred(createdate,modifydate,valued,user_id,servicetype_id,sgo,statusincurred_id) VALUES ($1, $2, $3, $4, $5, $6,$7) RETURNING *',
        [ incurredData.createDate, incurredData.modifyDate, incurredData.valued, incurredData.user_id, incurredData.serviceType_id, incurredData.sgo, incurredData.statusIncurred_id]
        );
        client.release();

        return result.rows[0];
    }catch(error){
        throw error;
    }
};

const updateincurred = async (incurredId, incurredData) => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('UPDATE public.incurred SET createdate=$1, modifydate=$2, valued=$3, user_id=$4, servicetype_id=$5, sgo=$6, statusincurred_id=$7 WHERE id=$8 RETURNING *',
        [incurredData.createDate, incurredData.modifyDate, incurredData.valued, incurredData.user_id, incurredData.serviceType_id, incurredData.sgo, incurredData.statusIncurred_id, incurredId]);
        client.release();
        
        return result.rows[0];
    }catch(error){
        throw error;
    }
};
const deleteincurred = async (incurredId) => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('DELETE FROM public.incurred WHERE id = $1 RETURNING *', [incurredId]);
        client.release();

        return result.rows[0];
    }catch(error){
        throw error;
    }
};


module.exports = {
    getallincurred,
    getincurredbyId,
    createincurred,
    updateincurred,
    deleteincurred,
}