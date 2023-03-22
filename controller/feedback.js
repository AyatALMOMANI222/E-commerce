const connection = require("../model/db")

const createfeedback = (req,res)=>{
const {  feedback} =req.body;
const query = `INSERT INTO feedback (  feedback) VALUES (?)`
const data =[  feedback]
connection.query(query,data ,(err,result)=>{
    if(err){
        res.json(err)
    }
    res.json(result)
}
)}


const getallfeedback =(req,res)=>{

    const query = `SELECT * FROM feedback`
    connection.query(query,(err,result)=>{
        if(err){
            res.json(err)
        }
        res.json(result)
    })
}

const deleteFeedback =(req,res)=>{

const id =req.params.id;
const query = `DELETE FROM feedback WHERE id=?`
const data =[id]
connection.query(query,data,(err,result)=>{
    if(err){
        res.json(err)
    }
    res.json(result)
})
}


const updateFeedback =(req,res)=>{
    const {feedback} =req.body;
    const id =req.params.id
    const query =`UPDATE feedback SET feedback=? WHERE id=?`
    const data =[feedback,id]
    connection.query(query,data,(err,result)=>{
        if(err){
            res.json(err)
        }
        res.json(result)
    })
 
}












module.exports= {createfeedback,  getallfeedback, deleteFeedback ,updateFeedback};