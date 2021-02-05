const express = require('express');
const router = express.Router();
const db = require("../models/db");

router.get('/:id', (req, res)=>{
     
    let sql = `SELECT *  FROM Image  WHERE itemId = ${req.params.id}  `
    let query = db.query(sql, (err, result)=>{
        if (err){
            res.status(404).send({error:err})
        }
       
        res.send(result)
    })
})

module.exports = router