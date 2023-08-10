const DB = require('../../database/database.js');

const getallpaymentvariable = async () => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('SELECT * FROM public.paymentvariable;');
        client.release();

        return result.rows;
    }catch(error){
        throw error;
    }
};

const getpaymentvariablebyId = async (paymentId) => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('SELECT * FROM public.paymentvariable WHERE id = $1',[paymentId]);
        client.release();

        return result.rows[0];
    }catch(error){
        throw error;
    }
};

const createpaymentvariable = async (paymentData) => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('INSERT INTO public.paymentvariable(value,createdate,enddate,typepaymentvalue_id,isworkday,currencytype_id) VALUES ($1, $2, $3, $4, $5, $6)',
        [ paymentData.value, paymentData.createDate, paymentData.endDate, paymentData.typePaymentValue_id, paymentData.isWorkDay, paymentData.currencyType_id]
        );
        client.release();

        return result.rows[0];
    }catch(error){
        throw error;
    }
};

const updatepaymentvariable = async (paymentId, paymentData) => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('UPDATE public.paymentvariable SET value=$1, createdate=$2, enddate=$3, typepaymentvalue_id=$4, isworkday=$5, currencytype_id=$6 WHERE id=$7 RETURNING *',
        [paymentData.value, paymentData.createdate, paymentData.enddate, paymentData.typepaymentvalue_id, paymentData.isworkday, paymentData.currencytype_id, paymentId]);
        client.release();
        
        return result.rows[0];
    }catch(error){
        throw error;
    }
};

const deletepaymentvariable = async (paymentId) => {
    try{
        const client = await DB.pool.connect();
        const result = await client.query('DELETE FROM public.paymentvariable WHERE id = $1 RETURNING *', [paymentId]);
        client.release();

        return result.rows[0];
    }catch(error){
        throw error;
    }
}


module.exports = {
    getallpaymentvariable,
    getpaymentvariablebyId,
    createpaymentvariable,
    updatepaymentvariable,
    deletepaymentvariable,
}