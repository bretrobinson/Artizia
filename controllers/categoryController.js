const jwt = require('jsonwebtoken')
const dbConfig = require("../config/db.config.js");
const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync(10);

const categoryModel = require("../models/categoryModel.js");

console.log('made it into category controller');

exports.category_list = (req, res) => {

  // Find categories
  categoryModel.category_list(req, (err, data) => {
    
  if (err)
    res.status(500).send({
      message:
        err.message || "Some error occurred while finding most recent items by category matching search term."
    });
    else res.send(data);
  });
};

exports.category_create = (req, res) => {

  console.log('category_create: ', req.body)
  console.log('category params: ', req.params)
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Category can not be empty!"
    });
  }

  // Create a category
  //const newCategory = req.body.category
  //console.log('controller category new: ', newCategory, req.params)
  
  const newCategory = new categoryModel({
    name:req.body.name,
    //name:"Testing",
  });

  console.log('controller newCategory :', newCategory)
  console.log('controller category new: ', newCategory, req.body)

   // Save category in database
  categoryModel.category_create_post(newCategory, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the category."
      });
    } else {
      res.send({data});}
  });
};
