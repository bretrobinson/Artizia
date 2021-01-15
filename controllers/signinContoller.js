const jwt = require('jsonwebtoken')

const Signup = require("../models/signupModel.js");
// Create and Save a new User
exports.create = (req, res) => {
   
  // Validate request
  if (!req.body) {
    
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  // Create a User
  const signup = new  Signup({
    password:req.body.password,
    email:req.body.email,
    lName:req.body.lName,
    fName:req.body.fName,
    location:req.body.location,
    payment:req.body.payment,
    
  
  });
   // Save item review in the database
   Signup.create(signup, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    else {
      const token = jwt.sign({userId: data.id}, 'MY_SECRETE_KEY')
      res.send({token, data});}
  });
};