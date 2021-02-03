const express = require ('express')
const cors = require ('cors')
// const mysql = require('mysql');
const announcementRoute = require('./routes/announcementRoute')
const requireAuth = require('./routes/requireAuthRoute')

const categoryRouter = require('./routes/categoryRouter');
const itemRouter = require('./routes/itemRouter');

const Signup=require("./routes/signupRoute");
//const ItemsReview=require("./routes/ItemReview.route");
//const SellerReview=require("./routes/SellerReview.route");
// const ItemRoute=require('./routes/Item.route')

const db = require("./models/db.js");
const app = express();
app.use(cors())
// const signup = require('./serverHandlers/signup')


db.connect((err)=> {
    if (err) {
      console.error('error connecting db: ' + err.stack);
      return;
    }
  
    console.log('connected to db as id ' + db.threadId);
  });

app.use(express.json())
// require("./routes/announcementReadRoute")(app);
require("./routes/ItemReview.route.js")(app);
require("./routes/SellerReview.route.js")(app);

// require("./routes/anouncementWriteRoute")(app);
require('./routes/signupRoute')(app)
require('./routes/Item.route')(app);
require('./routes/signinRoute')(app);
require('./routes/Image.route')(app);
// const database = {
//     login:[{
//         id: '120',
//         email: 'sally@gmail.com',
//         password: '1234',
//          }],
//     users:[{
//         id: '120',
//         email: 'sally@gmail.com',
//         password: '1234',
//         joined: new Date(),
//         location:''
//     }] announcement
// }announcement
// const checkToken = (req, res, next) => {requireAuth.handleAuth(req, res, db, jwt, next)}

app.use('/category', categoryRouter);
app.use('/item', requireAuth, itemRouter);
app.use('/announcement', announcementRoute)
app.get("/api", (req, res) => {
    res.json({
        message: 'Welcome to Craft Sell API'
    });
});

app.get('/profile', requireAuth, (req, res)=>{
    res.send(req.user)
})

// app.post('/announcement', (req, res)=>{
//     console.log(req.body)
//     res.send(req.body)
// })
    // db.query(sql, (err, result)=>{
//         if (err) throw err;
//         console.log(result)
//         res.send('Database connected')
//     })    
// })

// app.post('/signup', (req, res)=>{signup.handleSignup(req, res, database, jwt)})
// app.post('/signin', (req, res)=>{signin.handleSignup(req, res, database, jwt)})


app.listen(4000, ()=>{
    console.log('Listening on 4000')
})