const connection =require("../model/db")

const createbrands =(req,res)=>{
const {id, brand, image}=req.body;
const query = `INSERT INTO brands (id, brand, image) VALUES (?,?,?)`
const data =[id, brand, image]

connection.query(query,data,(err,result)=>{
    if(err){
        res.json(err)
    }
    res.json(result)
})
}

const getallbrands =(req,res)=>{
const query = `SELECT * FROM brands`
connection.query(query,(err,result)=>{
    if(err){
        res.json(err)
    }
    res.json(result)
})

}


const deleteBrand=(req,res)=>{
const id =req.params.id;
const query =`DELETE FROM brands WHERE id=?`
const data = [id]
connection.query(query,data,(err,result)=>{
    if(err){
        res.json(err)
    }
    res.json(result)
})
}

const updatedBrands =(req,res)=>{
    const { brand, image}=req.body;
    const id =req.params.id
    const query = `UPDATE brands SET brand=?, image=? WHERE id=?`
const data =[brand, image,id]
connection.query (query,data,(err,result)=>{
if(err){
    res.json(err)
}
res.json(result)
}
)
}









module.exports={createbrands,getallbrands,deleteBrand,updatedBrands};