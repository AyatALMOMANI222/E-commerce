const connection =require("../model/db.js")

 const createuser =(req,res)=>{
const {name,email,password,shipping_address,country,city,billing_address} =req.body;
const query = `INSERT INTO Customers (name,email,password,shipping_address,country,city,billing_address) VALUES (?,?,?,?,?,?,?)`
const data =[name,email,password,shipping_address,country ,city,billing_address]

connection.query(query, data ,(err,result)=>{
    if(err){
      res.json(err)
      console.log(err)
    }
    
   res.json(result)
    console.log(result)
})
}

const getcustomer =(req,res)=>{
  const query = `SELECT * FROM Customers`
  connection.query(query,(err,result)=>{
    if(err){
      res.json(err)
    }
    res.json(result)
  })
}


const deleteUserById =(req,res)=>{
const id = req.params.id;
const query = `DELETE FROM Customers WHERE ID =?`
const data = [id]
connection.query(query,data,(err,result)=>{
  if(err){
    res.json(err)
  }
  res.json(result)
})
}

const updateUserById =(req,res)=>{

  
  const {name,email ,password,shipping_address,country,city,billing_address} =req.body;
  const id =req.params.id
  const query =`UPDATE Customers SET name=?,email=?,password=?,shipping_address=?,country=?,city=?,billing_address=? WHERE id=?`
  const data =[name,email ,password,shipping_address,country,city,billing_address,id]
  connection.query(query,data,(err,result)=>{
      if(err){
          res.json(err)
      }
      res.json(result)
  })









}






module.exports= {createuser,getcustomer,deleteUserById,updateUserById}

