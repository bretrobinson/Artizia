const { reduce } = require('async');
const express = require('express');
const router = express.Router();
const db = require("../models/db");

router.post('/:id', (req, res)=>{
    // message from Item detail to seller

    if(req.body.sellerid === req.user.idusers){
        res.status(422).send('You not send message to yourself')
    } else{
        let post = {
            message: req.body.message, 
            dateCreated:new Date(), 
            buyerid: req.user.idusers, 
            itemid: req.params.id, 
            sellerid:req.body.sellerid, 
            itemName:req.body.itemName,
            itemUri:req.body.uri,
            messageFrom: req.user.idusers,
        }
        let sql1 = `INSERT INTO messages SET ?   `
        let query1 = db.query(sql1, post, (err, result)=>{
            if (err){
                res.status(404).send({error:err})
            }
        //    console.log(result)
            res.send('Message sent to the seller')
        })
    }
   
 
})
router.patch('/:id', (req, res)=>{
// Message from the message detail
        let post = {
            message: req.body.message, 
            dateCreated:new Date(), 
            buyerid: req.body.buyerid, 
            itemid: req.params.id, 
            sellerid:req.body.sellerid, 
            itemName:req.body.itemName,
            itemUri:req.body.uri,
            messageFrom: req.user.idusers,
        }
        let sql1 = `INSERT INTO messages SET ?   `
        let query1 = db.query(sql1, post, (err, result)=>{
            if (err){
                res.status(404).send({error:err})
            }
        
            res.send('Message sent to the seller')
        })      
 
})

router.delete('/:id', (req,res)=>{
    
    let sql = `DELETE FROM messages WHERE idmessages='${req.params.id}'`
    let query1 = db.query(sql, (err, result)=>{
        if (err){
            res.status(404).send({error:err})
        }
          res.send('Message deleted')
    }) 
})

router.get('/', (req, res)=>{
   
    let sql = `SELECT DISTINCT buyerid, sellerid, itemid, itemName, itemUri from messages WHERE buyerid = ${req.user.idusers} or sellerid = ${req.user.idusers}`

    let query1 = db.query(sql, (err, result)=>{
        if (err){
            res.status(404).send({error:err})
        }
    //    console.log(result)
        res.send(result)
    })
})
router.post('/', (req, res)=>{

    let sql = `SELECT * from messages WHERE buyerid = ${req.body.buyerid} AND sellerid = ${req.body.sellerid} AND itemid= ${req.body.itemid}`

    let query1 = db.query(sql, (err, result)=>{
        if (err){
            res.status(404).send({error:err})
        }
    //    console.log(result)
        res.send(result)
    })
})

module.exports = router