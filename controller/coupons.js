const connection =require("../model/db")

const createcoupons = (req,res)=>{
const {coupon_code, discount_percentage,expiration_date}=req.body
const query = ` INSERT INTO Coupons (coupon_code, discount_percentage,expiration_date) VALUES (?,?,?)`
const data =[coupon_code, discount_percentage,expiration_date]
connection.query(query,data,(err,result)=>{
    if(err){
        res.json(err)
    }
    res.json(result)
})
}

const deleteCoupons =(req,res)=>{
    const id =req.params.id;
    const query = `DELETE FROM Coupons WHERE id=?`
    const data =[id]
    connection.query(query , data , (err,result)=>{
        if(err){
            res.json(err)
        }
        res.json(result)
    })
}

const updateCouponsById =(req,res)=>{
    const {coupon_code, discount_percentage,expiration_date}=req.body
    const id =req.params.id
    const query = `UPDATE Coupons SET coupon_code=?, discount_percentage=?,expiration_date=? WHERE id=?  `
const data =[coupon_code, discount_percentage,expiration_date,id]
connection.query(query,data,(err,result)=>{
    if(err){
        res.json(err)
    }
    res.json(result)
})
}




module.exports= {deleteCoupons,createcoupons,updateCouponsById}