const connection = require("../model/db");

const createcart =(req,res)=>{
const {quantity,sub_total } =req.body
// const quantity=10;
// const sub_total=20
const query = `INSERT INTO cart (quantity,sub_total) VALUES (?,?)`
const data =[quantity,sub_total]
connection.query(query,data,(err,result)=>{
if(err){
    res.json(err)
}
res.json(result)
})


 }


// const getcartbyuserid =(req,res)=>{
//     const userId=req.body
//     const query = `SELECT carts.id, carts.user_id FROM carts JOIN users ON carts.user_id = users.user_id WHERE users.user_id = ${userId}`
//     connection.query(query,(err,result)=>{
//         if(err){
//             res.json(err)
//         }
//         res.json(result)
//     })
// }


const deleteCart =(req,res)=>{
    const id =req.params.id;
    const query = `DELETE FROM cart WHERE id=?`
    const data =[id]
    connection.query(query, data ,(err,result)=>{
        if(err){
            res.json(err)
        }
        res.json(result)
    })
}


const updateCartById =(req,res)=>{
    const {quantity,sub_total} =req.body
    const id = req.params.id
    const query =`UPDATE cart SET quantity=?,sub_total=? WHERE id=?`
    const data =[quantity,sub_total,id]
    connection.query(query,data,(err,result)=>{
        if(err){
            res.json(err)
        }
        res.json(result)
    })


   
}





module.exports= {createcart,deleteCart,updateCartById};
