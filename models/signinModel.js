const sql = require("./db.js");
const async = require('async');

const SigninModel = function(item){

}

SigninModel.findUser=function(searchTerm, results){   
  console.log(searchTerm) 
    const userSql = `select password FROM users WHERE  email = '${searchTerm}' `;
    sql.query(userSql, function(err, res) {
        if (err) {
          console.log(err.message)

          return
        }
        // console.log(res)
        results(null, res)     
        // res.send(result)

    });
}

module.exports=SigninModel;

