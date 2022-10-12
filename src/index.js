const express = require('express');
const path = require('path');
//initializations
const app = express();
//settings
app.set('port', process.env.PORT || 3000);

//Routes

//Public
app.use(express.static(path.join(__dirname, 'public')));
//Starting the server
app.listen(app.get('port'), ()=>{
    console.log(`Servidor funcionando en el puerto ${app.get('port')}`);
});