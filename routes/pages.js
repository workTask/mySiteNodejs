const express = require("express")

const router = express.Router()
//
router.get("/", (req, res)=>{
    //res.send("Home page")
    res.render("index.hbs")
})


router.get("/register", (req, res)=>{
   // res.send("Register page")
   res.render("register")
})

// export pages
module.exports = router