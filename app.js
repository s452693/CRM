const express = require('express');
const app = express();
const Handlebars = require('handlebars')
const exphbs  = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const db = require('./config/db-connect');

const userRoutes = require('./api/routes/users');
const indexRoutes = require('./api/routes/index');

//Handlebars
app.engine('hbs', exphbs({
    defaultLayout: 'index',
    extname: 'hbs',
    handlebars: allowInsecurePrototypeAccess(Handlebars) //daje dostęp do bazy
}));
app.set('view engine', 'hbs');

app.use(express.static('public/'));


app.use('/', indexRoutes);
app.use('/user', userRoutes);






module.exports = app;