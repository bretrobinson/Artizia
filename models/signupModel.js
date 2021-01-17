const sql = require("./db.js");


const Signup =function(signup ){

    this.password=signup.password;
     this.email=signup.email;
    this.lName=signup.lName;
   this.fName=signup.fName;
    this.location=signup.location;
   this.payment=signup.payment;

}


Signup.create = (newSignup, result) => {
    sql.query("INSERT INTO users SET ?", newSignup, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created user: ", { id: res.insertId, ...newSignup});
      result(null, { id: res.insertId, ...newSignup });
    });
  };
module.exports = Signup ;