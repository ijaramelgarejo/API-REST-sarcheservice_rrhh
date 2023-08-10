const DB = require('../../database/database.js');

const getallcompany = async () => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('SELECT * FROM public.company;');
        client.release();
 
        return result.rows;
    }catch(error){
        throw error;
    }
};

const getcompanybyId = async (id) => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('SELECT * FROM public.company WHERE Id = $1',[id]); 
        client.release();

        return result.rows[0];
    }catch(error){
        throw error;
    }
};

const createcompany = async (companyData) => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('INSERT INTO public.company(businessname,rut,dv,giro,status_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [ companyData.businessName, companyData.rut, companyData.dv, companyData.giro, companyData.status_id]
        );
        client.release();

        return result.rows[0];
    }catch(error){
        throw error;
    }
};

const updatecompany = async (companyId, companyData) => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('UPDATE public.company SET businessname=$1, rut=$2, dv=$3, giro=$4, status_id=$5 WHERE id=$6 RETURNING *',
        [companyData.businessName, companyData.rut, companyData.dv, companyData.giro, companyData.status_id, companyId]);
        client.release();
        
        return result.rows[0];
    }catch(error){
        throw error;
    }
};

const deletecompany = async (companyId) => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('DELETE FROM public.user WHERE id = $1 RETURNING *', [companyId]);
        client.release();

        return result.rows[0];
    }catch(error){
        throw error;
    }
};

module.exports = {
    getallcompany,
    getcompanybyId,
    createcompany,
    updatecompany,
    deletecompany,
}
