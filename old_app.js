const express = require('express')
const app = express();
const path =require('path');
const hbs=require('hbs');
const publicDirectoryPath=path.join(__dirname,'../public');
const viewDirectoryPath=path.join(__dirname,'../templates/views');
const paritalDirectoryPath=path.join(__dirname,'../templates/partials');
console.log(viewDirectoryPath);
app.set('view engine', 'hbs');
//to change the path of views  ....By default goes to views folder and you can change by using below code
//app.set('views', viewDirectoryPath);
app.set('view engine','hbs');
app.set('views',viewDirectoryPath)
hbs.registerPartials(paritalDirectoryPath)
//To load static files folder
app.use(express.static(publicDirectoryPath))
app.get('',(req,res) => { 
    res.render('index',{title:"Index",name :"Prakhar"})
})
app.get('/about',(req,res) => {
    res.render('about',{title:"About Page" ,name :"Shubham"})
}) 
app.get('/help',(req,res) => {
    res.render('about',{title:"Help Page",name :"Sanket"})
})
app.get('*',(req,res)=>{
    res.render('404');
}) 
/* app.get('',(req,res) =>{
    res.send('<h1>Hello express</h1>');

})

app.get('/help',(req,res) =>{
    //object converted to string through send
    res.send({
        name:'Prakhar',
        Age:24
    });

})

app.get('/about',(req,res) =>{
    res.send('About Page');

})

app.get('/weather',(req,res) =>{
    res.send('Weather Page');
}) */



app.listen(3000,()=>{
console.log('Server is up on 3000');
})