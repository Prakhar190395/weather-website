const express = require('express')
const app = express();
const path =require('path');
const hbs=require('hbs');
const publicDirectoryPath = path.join(__dirname,'../public');
const viewDirectoryPath = path.join(__dirname,'../templates/views');
const paritalDirectoryPath = path.join(__dirname,'../templates/partials');
const appPath=path.join(__dirname,'../weatherapp');
const geocode = require('./geocode.js');
const forecast = require('./forecast.js');

app.set('view engine', 'hbs');
//to change the path of views  ....By default goes to views folder and you can change by using below code
app.set('view engine','hbs');
app.set('views',viewDirectoryPath)
hbs.registerPartials(paritalDirectoryPath)
//To load static files folder
app.use(express.static(publicDirectoryPath))

app.get('',(req,res) => { 
    res.render('index',{title:"Weather Home Page",name :"Prakhar"})
})
app.get('/about',(req,res) => {
    res.render('about',{title:"About Page" ,name :"Shubham"})
}) 
app.get('/help',(req,res) => {
    res.render('about',{title:"Help Page",name :"Sanket"})
})
app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:'You must provide address term in query string'
        })
    }
    geocode(req.query.address,(error,latlng={}) => {
        if(error){
           return res.send({error});
        }
       forecast(latlng,(error,resmsg)=>{
            if(error){
                return res.send({error});
            }
           return res.send({
                        forecast: resmsg  ,
                        address:req.query.address
                    }
                
                );
        })
    })
})
app.get('/products',(req,res)=>{
    if(!req.query.search){
        return res.send({
            error:'You must provide search term in query string'
        })
    }
    res.send({
        products:[]
    })
})
app.get('*',(req,res)=>{
    res.render('404');
}) 

app.listen(3000,()=>{
console.log('Server is up on 3000');
})