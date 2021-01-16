const jwt = require('jsonwebtoken')

const SigninModel = require("../models/signinModel.js");
// const ItemModel= require("../models/item.model.js");

exports.findUser = (req, res) => {
   
  // Validate request
  if (!req.body) {
    
    res.status(400).send({
      message: "Incomplete submission!"
    });
  }
  // Create a user model
  const signin = new  SigninModel ({
    email:req.body.email,
    password:req.body.password,
  });

   // Find most recent items matching search term
   SigninModel.findUser(req.body.email, (err, data) => {
     console.log(data.length)
     let found = false
        if (err){
      res.status(500).send({
        message:
          err.message || "Incorrect "
      })
    } if(data.length>0){
      if(req.body.password === data[0].password){
        found = true
          if(found){
            const token = jwt.sign({userPassword: data[0].password}, 'MY_SECRETE_KEY')
      
            res.send({data,token});
          }       
      } 
 
          }
          if(!found){
            res.send('incorrect credintial')
          }
          
        }
  );
};