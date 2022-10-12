const express = require("express");
const path = require('path');
//initializations
const app = express();
//settings
app.set('port', 3000 || process.env.PORT);

//Routes

//Public
app.use(express.static(path.join(__dirname, 'public')));
//Starting the server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
});