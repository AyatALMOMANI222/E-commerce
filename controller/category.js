const { query } = require("../model/db")
const connection =require("../model/db")

const createCategory = (req,res)=>{
   const {name,description,img} =req.body
   const query = `INSERT INTO Categories (name,description,img) VALUES (?,?,?)`
   const data = [name,description,img]
   connection.query(query,data,(err,result)=>{
    if(err){
        res.json(err)
    }
    res.json(result)
   })
}

const deleteCategory =(req,res)=>{
   
const id =req.params.id
const query = `DELETE FROM Categories WHERE id=?`
const data = [id]
connection.query(query,data,(err,result)=>{
    if(err){
        res.json(err)
    }
    res.json(result)
})

}

const getCategory = (req,res)=>{
  const query = `SELECT * FROM Categories `
  connection.query(query,(err,result)=>{
    if(err){
        res.json(err)
    }
    res.json(result)
  })

}

const updateCategory =(req,res)=>{
  const {name,description,img} =req.body
  const id = req.params.id
const query = `UPDATE Categories SET name=?,description=?,img=? WHERE id=? `
  const data =[name,description,img,id]
  connection.query(query,data,(err,result)=>{
    if(err){
        res.json(err)
    }
    res.json(result)
  })
}




module.exports={createCategory ,deleteCategory,getCategory,updateCategory}