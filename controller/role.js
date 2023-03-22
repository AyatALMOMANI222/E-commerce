const connection = require("../model/db");
const createRole = (req, res) => {
  const { role } = req.body;
  const query = `INSERT INTO roles (role) VALUES (?)`;
  const data = [role];

  connection.query(query, data, (err, result) => {
    if (err) {
      return  res.json(err)
    }
      res.json(result);
  });

  
};
module.exports = createRole;