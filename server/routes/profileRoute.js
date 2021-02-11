const express = require('express');
const router = express.Router();
const db = require("../models/db");

router.patch('/', (req, res)=>{

    // console.log(req.body, req.user)

 
    let sql = `UPDATE users  SET email = '${req.body.email}', fName = '${req.body.fName}', lName = '${req.body.lName}', location = '${req.body.location}', payment = '${req.body.payment}' WHERE idusers = ${req.user.idusers}`
    // let sql = `UPDATE users  SET lName = '${req.body.lName}' WHERE idusers = ${req.user.idusers}`
    let query = db.query(sql, (err, result)=>{
        if (err){
            res.status(404).send({error:err})
        }
    //    console.log(result)
        // res.send(result)
    })

    let sql1 = ` SELECT * FROM users WHERE idusers = ${req.user.idusers}`
    let query2 = db.query(sql1, (err, result)=>{
        if (err){
            res.status(404).send({error:err})
        }
        const user = result[0]
        delete user.password
        res.send({user})
    })
})

module.exports = router