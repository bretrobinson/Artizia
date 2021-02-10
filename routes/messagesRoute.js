const { reduce } = require('async');
const express = require('express');
const router = express.Router();
const db = require("../models/db");

router.post('/:id', (req, res)=>{
    // console.log(req.body, req.user.idusers, req.params.id)
    const createdDate = new Date()
    let post = {message: req.body.message, dateCreated:createdDate, buyerid: req.user.idusers, itemid: req.params.id, sellerid:req.body.idusers }
    let sql1 = `INSERT INTO messages SET ?   `
    let query1 = db.query(sql1, post, (err, result)=>{
        if (err){
            res.status(404).send({error:err})
        }
    //    console.log(result)
        res.send('Message sent to the seller')
    })
})

module.exports = router