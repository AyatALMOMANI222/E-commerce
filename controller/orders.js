const connection=require("../model/db")

const createorder =(req,res)=>{
const {order_date, shipping_status, email} =req.body
const query = `INSERT INTO orders (order_date, shipping_status, email) VALUES (?,?,?)`
const data =[order_date, shipping_status, email]

connection.query(query,data,(err,result)=>{

if(err){
    res.json(err)
}
res.json(result)
})
}


const getorders =(req,res)=>{

    const query = `SELECT * FROM orders `
    connection.query(query,(err,result)=>{
        if(err){
            res.json(err)
        }
        res.json(result)
    })
}

const deleteOrderByid = (req,res)=>{
const id = req.params.id;
const query = `DELETE FROM orders WHERE id=?`
const data = [id]
connection.query(query,data,(err,result)=>{
if(err){
    res.json(err)
}
res.json(result)
})
}


const updateOrderById =(req,res)=>{
    
    const {order_date, shipping_status, email} =req.body
        const id =req.params.id
        const query =`UPDATE orders SET order_date=?, shipping_status=?, email=? WHERE id=?`
        const data =[order_date, shipping_status, email,id]
        connection.query(query,data,(err,result)=>{
            if(err){
                res.json(err)
            }
            res.json(result)
        })
     
    
}





module.exports={createorder,getorders,deleteOrderByid,updateOrderById};