const express = require('express');
const ejs = require('ejs')

const app = express();

app.set('view engine','ejs');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>{
    console.log("App listening on port", PORT)
})

var indexRouter = require('./routes/index');

app.use('/', indexRouter);