
const  Product = require ("../models/Product");


const createProduct = async (req,res,next)=>{
    const newProduct = new Product(req.body)
    try{
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct)
    }catch(err){
        res.status(500).json(err)
    }
}

const updateProduct = async (req,res,next)=>{
    try{
        const updated = await Product.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(200).json(updated)
    }catch(err){
        res.status(500).json(err)
    }
}

const deleteProduct = async (req,res,next)=>{
    try{
        await Product.findByIdAndDelete(req.params.id )
       res.status(200).json("it has been deleted")
   }catch(err){
       res.status(500).json(err)
   }
}

const getProduct = async (req,res,next)=>{
    
    try{
        const hot = await Product.findById(req.params.id)
        res.status(200).json(hot)
    }catch(err){
        res.status(500).json(err)
    }
}

const getProducts = async (req,res,next)=>{
  try{
    
    const products = await Product.find().limit(3)
    res.status(200).json(products)
}catch(err){
    res.status(500).json(err) 
 }
}



module.exports = {
   createProduct,
   deleteProduct,
   getProduct,
   getProducts,
   updateProduct,
}