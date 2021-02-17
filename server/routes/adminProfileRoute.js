const { response } = require('express');
const express = require('express');
const router = express.Router();
const db = require("../models/db");

router.put('/', (req, res)=>{
    
 const accountDisabledDate = new Date()
 console.log(accountDisabledDate)
    let sql = `UPDATE users  SET status = '${req.body.status}',  accountDisabled = "${accountDisabledDate}" WHERE email = '${req.body.email}'`
    // let sql = `UPDATE users  SET lName = '${req.body.lName}' WHERE idusers = ${req.user.idusers}`
    let query = db.query(sql, (err, result)=>{
        if (err){
            res.status(404).send({error:err})
        } if(result.affectedRows === 0){

            res.send(`${req.body.email} not found`)
        }else {
            res.send(`${req.body.email} changed to ${req.body.status}`)
        }

    })

})

module.exports = router