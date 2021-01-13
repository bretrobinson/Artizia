const express = require ('express')
const bcrypt = require ('bcrypt')
const mysql = require('mysql');
const jwt = require('jsonwebtoken')
const requireAuth = require('./serverHandlers/requireAuth')
const itemRouter = require("./routes/Item");
const ItemsReview=require("./routes/ItemReview.route");

const SellerReview=require("./routes/SellerReview.route");
const db = require("./models/db.js");
const app = express();
const signin = require('./serverHandlers/signin')
const signup = require('./serverHandlers/signup')


db.connect((err)=> {
    if (err) {
      console.error('error connecting db: ' + err.stack);
      return;
    }
  
    console.log('connected to db as id ' + db.threadId);
  });



app.use(express.json())
require("./routes/ItemReview.route.js")(app);
require("./routes/SellerReview.route.js")(app);
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