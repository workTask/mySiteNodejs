const express = require("express")


const app = express()

app.get("/", (req, res)=>{
    res.send("Home page")
})


app.get("/register", (req, res)=>{
    res.send("Register page")
})


app.get("/", (req, res)=>{
    console.log("Server start")
})