const connection = require("../model/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const login = (req, res) => {
    const { email, password } = req.body;
    const query = `SELECT *,Customers.id FROM Customers INNER JOIN roles ON Customers.role_id=roles.id WHERE email=?`;
  
    const data = [email];
    connection.query(query, data, (err, result) => {
      
      if (err) throw err;
      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (err, response) => {
          if (err) {
            res.status(403).json({
              success: false,
              message: `The password you’ve entered is incorrect`,
            });
          }
          if (response) {
          const query=`Update Customers SET userLoginTime=CURRENT_TIMESTAMP WHERE email=? `;
          const data = [email];
  
          connection.query(query,data,(err,result)=>{
            if (err) {
              console.log(err);          
            }
          
          })
            const payload = {
                name:result[0].name,
             id: result[0].id,
            //   role: result[0].role_id,
            //   email:result[0].email
            };
            const secret = process.env.SECRET;
  
            const token = jwt.sign(payload, secret);
  
            res.status(200).json({
              success: true,
              token,
              id: result[0].id,
              name: result[0].name,
            });
          } else {
            res.status(403).json({
              success: false,
              message: `The password you’ve entered is incorrect`,
            });
          }
        });
      } else {
  
        res
          .status(404)
          .json({ success: false, message: "The email doesn't exist" });
      }
    });

  
  };
  
  module.exports = login
  