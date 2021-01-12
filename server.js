const express = require ('express')
const bcrypt = require ('bcrypt')
const mysql      = require('mysql');
const jwt = require('jsonwebtoken')
const requireAuth = require('./serverHanhlers/requireAuth')


const db = mysql.createConnection({
  host     : 'craftdbinstance.c0rix1pv1sam.us-west-2.rds.amazonaws.com',
  user     : 'matrixroot',
  password : 'RF8p8vlVP48glnvKNJGa',
  aatabase: 'CraftDb'
});

db.connect((err)=> {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
  
    console.log('connected as id ' + db.threadId);
  });


const app = express()

app.use(express.json())



const database = {
    users:[{
        id: '120',
        email: 'sally@gmail.com',
        password: '1234',
        joined: new Date()
    }]
}
const requireAuthL = (req, res, next) => {
    const {authorization} = req.headers
    
    if(!authorization) {
        return res.status(401).send({error: 'You must be logged in'})
    }
    const token = authorization.replace('Bearer ', '' )
    jwt.verify(token, 'MY_SECRETE_KEY', async (err, payload)=>{
        if(err){
            return res.status(401).send({error: 'You must be logged in'})
        }
        const {userId} = payload
        
        const user = await database.users.find(user => user.id=== userId)
        req.user = user

        next()
    })
}

app.get('/', requireAuthL, (req, res)=>{
    res.send(`Your email: ${req.user.email}`)
})

// Edit this to create Table and insert data
// app.get('/createdb',  (req, res)=>{
//     let sql = 'CREATE DATABASE CraftDb';
//     db.query(sql, (err, result)=>{
//         if (err) throw err;
//         console.log(result)
//         res.send('Database connected')
//     })    
// })

app.post('/signup', (req, res)=>{
    const {password, email} = req.body
    if (!email || !password){
        return res.status(422).send('incorrect form submission')
    }
    try {
        database.users.push({
            id: `${database.users.length + 130}`,
            email,
            password,
            joined: new Date()
        })
        const token = jwt.sign({userId: database.users[database.users.length-1].id}, 'MY_SECRETE_KEY')
        // res.send(database.users[database.users.length-1])
        res.send({id: database.users[database.users.length-1].id, token} )

    } catch (err){
        return res.status(422).send(err.message)
    }
    
})

app.post('/signin', (req, res)=>{
    const {password, email} = req.body
    console.log(email, password)
    if (!email || !password){
        return res.status(422).send('incorrect form submission')
    }
    let found = false 
    database.users.forEach((user,i)=>{
        console.log(user.email)
        if(user.email === email){
            if(user.password == password){
                
                found = true
                if (found){
                    const token = jwt.sign({userId: database.users.id}, 'MY_SECRETE_KEY')
                    res.status(200).send(token)
                }
            }
        }
    })
    if(!found) {
        res.status(422).send('incorrect form submission')
    }
    
})

app.listen(3000, ()=>{
    console.log('Listening on 3000')
})