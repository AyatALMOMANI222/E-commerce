const connection =require("../model/db");

const createproduct =(req,res)=>{
const {name,description ,price,image,manufacture_country} =req.body;
const query = `INSERT INTO products (name,description ,price,image,manufacture_country) VALUES (?,?,?,?,?)`
const data = [name,description ,price,image,manufacture_country]
connection.query(query,data,(err,result)=>{
   if(err){
    res.json(err)
   } 
   res.json(result)
})
}

const getallproduct =(req,res)=>{
    const query = `SELECT * FROM products`
    connection.query(query,(err,result)=>{
        if(err){
            res.json(err)
        }
        res.json(result)
    })
}

const deleteProductById =(req,res)=>{
    const id = req.params.id;
    const query = `DELETE FROM products WHERE id=?`
    const data =[id];
connection.query(query,data,(err,result)=>{
    if(err){
        res.json(err)
    }
    res.json(result)
})
}


const updateProduct = (req,res)=>{
    
    const {name,description ,price,image,manufacture_country} =req.body;
            const id =req.params.id
            const query =`UPDATE products SET name=?,description=? ,price=?,image=?,manufacture_country=? WHERE id=?`
            const data =[name,description ,price,image,manufacture_country,id]
            connection.query(query,data,(err,result)=>{
                if(err){
                    res.json(err)
                }
                res.json(result)
            })
         
       
    
}










module.exports={createproduct ,getallproduct,deleteProductById,updateProduct}