const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers');
const port = process.env.PORT || 3000;
hbs.registerPartials(__dirname + '/views/parciales' );

app.use(express.static(__dirname+'/public'));
//express HBS
app.set('view engine', 'hbs');

app.get('/',  (req, res) => {
    res.render('home',{
        nombre : 'antony',
    });
    
});
app.get('/about',  (req, res) => {
    res.render('about',{
        nombre : 'antony',
    });
    
});

 
app.listen(3000,() => {
    console.log(`Corriendo en el Puerto ${port}`);
});