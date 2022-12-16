const express=require('express');
const path=require('path');
const app=express();
require('./models');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

// var userctrl=require('./controllers/userController');
app.get('/',(req,res)=>{
    res.send('hi');
});
const userctrl=require('./controllers/coursecontrollers')
app.get('/add',userctrl.addUser);
// app.get('/crud',userctrl.crudoperation);
// app.get('/query',userctrl.querydata);
app.listen(3600);