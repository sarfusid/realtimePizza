const express = require('express')
const app = express()
const ejs = require('ejs')
const expressLayout= require('express-ejs-layouts')
const path = require('path')

const PORT = process.env.PORT || 4400

//app.get
app.get('/',(req,res) =>{
    res.render('ghar');
})
//set Templates engine
app.use(expressLayout)
app.set('views',path.join(__dirname,'/recources/views'))
app.set('views engine','.ejs')

app.listen(PORT,() => {
    console.log(`this is localhost server ${PORT}`)
})
