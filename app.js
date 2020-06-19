const express = require("express")
const path = require("path")

const port= process.env.PORT || 5000

const app = express()

const publicDir = path.join(__dirname, './public')
app.use(express.static(publicDir))
//console.log(__dirname)



//connect .hbs file
app.set('view engine', 'hbs')

// add database



//add pages and use pages
//app.get("/", (req, res)=>{
    //res.send("Home page")
 //   res.render("index.hbs")
//})
app.use('/', require('./routes/pages'))





app.listen(port, (req, res)=>{
    console.log("Server start")
})