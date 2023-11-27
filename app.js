const express = require("express")
const app = express()
const mainRoute = require("./routers/main.js")
const path = require("path")

app.listen(3000, ()=>{
    console.log('Servidor funcionando')});

app.use("/", mainRoute)
app.use(express.static(path.join(__dirname,"/public")))