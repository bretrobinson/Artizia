const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync(10);

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
      // if(req.body.password === data[0].password)
      const isFound = bcrypt.compareSync(req.body.password, data[0].password);
        found = isFound
        console.log(data[0].password)
          if(found){
            const token = jwt.sign({userId: data[0].idusers}, 'MY_SECRETE_KEY')
      
            res.send({token});
          }       
      
 
          }
          if(!found){
            res.send('incorrect credintial')
          }
          
        }
  );
};