const express = require ('express')
const bcrypt = require ('bcrypt')
const mysql = require('mysql');
const jwt = require('jsonwebtoken')
const requireAuth = require('./serverHandlers/requireAuth')
const itemRouter = require("./routes/Item");
const signin = require('./serverHandlers/signin')
const signup = require('./serverHandlers/signup')

db = mysql.createConnection({
    host: 'craftdbinstance.c0rix1pv1sam.us-west-2.rds.amazonaws.com',
    user: 'matrixroot',
    password: 'RF8p8vlVP48glnvKNJGa',
    database: 'CraftDb'
});

db.connect((err)=> {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
  
    console.log('connected to db as id ' + db.threadId);
  });

const app = express()

app.use(express.json())

app.use('/api/item', itemRouter);

const database = {
    users:[{
        id: '120',
        email: 'sally@gmail.com',
        password: '1234',
        joined: new Date()
    }]
}
const checkToken = (req, res, next) => {requireAuth.handleAuth(req, res, database, jwt, next)}

app.get("/api", (req, res) => {
    res.json({
        message: 'Welcome to Craft Sell API'
    });
});

app.get('/', checkToken, (req, res)=>{
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

app.post('/signup', (req, res)=>{signup.handleSignup(req, res, database, jwt)})
app.post('/signin', (req, res)=>{signin.handleSignup(req, res, database, jwt)})


app.listen(3000, ()=>{
    console.log('Listening on 3000')
})