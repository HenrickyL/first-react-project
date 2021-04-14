// import express from 'express';
// import React from 'react';
// import ReactDOMServer from 'react-dom/server';
// import App from './App';
// import template from './template';
// import path from 'path'

// import { createEngine } from 'express-react-views'


const path = require('path')
const express = require('express')
const app = express()
const { createEngine } = require('express-react-views');

// app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


// 


app.set('views', path.resolve('./views')) //[A]
app.set('view engine', 'js'); // [B]
// app.engine('js', require('express-react-views').createEngine());

// app.engine('js', createEngine()); // [C]
// 
// "type": "module",

app.get('/', (res, req) => res.render('App', { name: 'Eduardo' }));


app.get('/api',(req,res)=>{
    const data = [
        {id:1, firstName: 'Henricky', lastName: 'Lima'},
        {id:2, firstName: 'Pedro', lastName: 'Anthony'},
        {id:3, firstName: 'Antonio', lastName: 'Mário'},
        {id:4, firstName: 'Henrique', lastName: 'Akali'},
        {id:5, firstName: 'Lua', lastName: 'Sousa'},
    ]
    res.json(data)
})











const port = process.env.PORT || 5001;
app.listen(port,()=>{
    console.log('APP run in', port)
})