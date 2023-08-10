const express = require('express');
const usersroutes = require('./routes/usersRoutes');
const statusroutes = require('./routes/statusRoutes');
const companyroutes = require('./routes/companyRoutes');
const serviceroutes = require('./routes/serviceRoutes.js');
const servicetyperoutes = require('./routes/serviceTypeRoutes');
const incurredroutes = require('./routes/incurredRoutes');
const responsibleroutes = require('./routes/responsibleRoutes');
const statusincurredroutes = require('./routes/statusIncurredRoutes');
const paymentvariableroutes = require('./routes/paymentVariableRoutes');
const currencytyperoutes = require('./routes/currencyTypeRoutes');
const typepayroutes = require('./routes/typePaymentValueRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', usersroutes);
app.use('/api', statusroutes);
app.use('/api', companyroutes);
app.use('/api', serviceroutes);
app.use('/api', servicetyperoutes);
app.use('/api', incurredroutes);
app.use('/api', responsibleroutes);
app.use('/api', statusincurredroutes);
app.use('/api', paymentvariableroutes);
app.use('/api', currencytyperoutes);
app.use('/api', typepayroutes);

app.listen(PORT, () => {
    console.log(`Servidor en puerto ${PORT}`);
});