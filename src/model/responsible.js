const DB = require('../../database/database.js');

const getallresponsible = async () => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('SELECT * FROM public.responsible;');
        client.release();
 
        return result.rows;
    }catch(error){
        throw error;
    }
};

const getresponsibleById = async (responsibleId) => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('SELECT * FROM public.responsible WHERE id = $1',[responsibleId]);
        client.release();

        return result.rows[0];
    }catch(error){
        throw error;
    }
};

const createresponsible = async (responsibleData) => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('INSERT INTO public.responsible(name,lastname,email,rut,dvrut,status_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [ responsibleData.name, responsibleData.lastName, responsibleData.email, responsibleData.rut, responsibleData.dvRut, responsibleData.status_id]
        );
        client.release();

        return result.rows[0];
    }catch(error){
        throw error;
    }
};

const updateresponsible = async (responsibleId, responsibleData) => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('UPDATE public.responsible SET name=$1, lastname=$2, email=$3, rut=$4, dvrut=$5, status_id=$6 WHERE id=$7 RETURNING *',
        [responsibleData.name, responsibleData.lastName, responsibleData.email, responsibleData.rut, responsibleData.dvrut, responsibleData.status_id, responsibleId]);
        client.release();
        
        return result.rows[0];
    }catch(error){
        throw error;
    }
};

const deleteresponsible = async (responsibleId) => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('DELETE FROM public.responsible WHERE id = $1 RETURNING *', [responsibleId]);
        client.release();

        return result.rows[0];
    }catch(error){
        throw error;
    }
};

module.exports = {
    getallresponsible,
    getresponsibleById,
    createresponsible,
    updateresponsible,
    deleteresponsible,
}