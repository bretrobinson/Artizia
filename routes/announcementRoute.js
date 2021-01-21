const express = require('express');
const router = express.Router();
const announcementRead = require("../controllers/announcementReadController");
const announcementWrite = require("../controllers/announcementWriteController");
const db = require("../models/db");

router.get('/', announcementRead.readMessage)

router.post('/', announcementWrite.create)

router.post('/:id', (req, res)=>{
    console.log(req.params, req.body)
    let sql = `UPDATE Announcements  SET message = '${req.body.message} 'WHERE idAnnouncements = ${req.params.id}  `
    let query = db.query(sql, (err, result)=>{
        if (err){
            console.log({error:err})
        }
        console.log(result)
        res.send('post deleted')
    })
})

router.delete('/:id', (req, res)=>{
    console.log(req.params)
    let sql = `DELETE FROM Announcements WHERE idAnnouncements = ${req.params.id} `
    let query = db.query(sql, (err, result)=>{
        if (err){
            console.log({error:err})
        }
        console.log(result)
        res.send('post deleted')
    })
})

module.exports = router