const DB = require('../../database/database.js');

const getAllUsers = async () => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('SELECT * FROM public."user";');
        client.release();

        return result.rows;
    }catch(error){
        throw error;
    }
};
const getUserById = async (userId) => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('SELECT * FROM public.user WHERE Id = $1',[userId]);
        client.release();

        return result.rows[0];
    }catch(error){
        throw error;
    }
};

const createUser = async (userData) => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('INSERT INTO public.user(name,lastname,rut,dv,email,status_id) VALUES ($1, $2, $3, $4, $5, $6)',
        [ userData.name, userData.lastName, userData.rut, userData.dv, userData.email, userData.status_id]
        );
        client.release();

        return result.rows[0];
    }catch(error){
        throw error;
    }
};

const updateUser = async (userId, userData) => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('UPDATE public.user SET name=$1, lastname=$2, rut=$3, dv=$4, email=$5, status_id=$6 WHERE Id=$7 RETURNING *',
        [userData.name, userData.lastName, userData.rut, userData.dv, userData.email, userData.status_id, userId]);
        client.release();
        
        return result.rows[0];
    }catch(error){
        throw error;
    }
};

const deleteUser = async (userId) => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('DELETE FROM public.user WHERE Id = $1 RETURNING *', [userId]);
        client.release();

        return result.rows[0];
    }catch(error){
        throw error;
    }
}


module.exports = { 
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
 };