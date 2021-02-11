const sql = require("./db.js");
const async = require('async');

const Category = function(category) {
  console.log('Category this.name: ', category)
  this.name=category.name;
}

Category.category_list = function(req, result) {   
  console.log('made it to category model');
  const userSql = `select * FROM Category `;
  sql.query(userSql, function (err, res) {
    if (err) {
      console.log(err.message)
      return
    }
    result(null, res);
  });
}

Category.category_create_post = (newCategory, result) => {
  console.log('inside category create post ', newCategory.body, newCategory);

  sql.query("INSERT INTO Category SET ?", newCategory, (err, res) => {
    if (err) {
      console.log("insert category error: ", err);
      result(err, null);
      return;
    }

    console.log("created category: ", { id: res.insertId, ...newCategory});
    result(null, { id: res.insertId, ...newCategory });
  });
};

module.exports = Category;
