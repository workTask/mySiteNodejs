const express = require("express")

const port= process.env.PORT || 5000

const app = express()

app.get("/", (req, res)=>{
    res.send("Home page")
})


app.get("/register", (req, res)=>{
    res.send("Register page")
})


app.listen(port, (req, res)=>{
    console.log("Server start")
})