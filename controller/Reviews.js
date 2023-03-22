const connection=require("../model/db")

const createreviews = (req,res)=>{
const {rating, review_text} =req.body;

const query = `INSERT INTO Reviews (rating, review_text) VALUES (?,?)`
const data =[rating,review_text]

connection.query(query,data,(err,result)=>{
if(err){
    res.json(err)
}
res.json(result)

})
}


const getallreviews =(req,res)=>{
    const query = `SELECT * FROM Reviews`
    connection.query(query,(err,result)=>{
        if(err){
            res.json(err)
        }
        res.json(result)
    })
}

const deleteReviewsById =(req,res)=>{
   const id =req.params.id;
   const query = `DELETE FROM Reviews WHERE id=?`
   const data = [id]
   connection.query(query,data,(err,result)=>{
    if(err){
        res.json(err)
    }
    res.json(result)
   })
}


const updateReview = (req,res)=>{
    const {rating, review_text} =req.body;
            const id =req.params.id
            const query =`UPDATE Reviews SET rating=?, review_text=? WHERE id=?`
            const data =[rating, review_text,id]
            connection.query(query,data,(err,result)=>{
                if(err){
                    res.json(err)
                }
                res.json(result)
            })

        }




module.exports = {createreviews,getallreviews,deleteReviewsById, updateReview};