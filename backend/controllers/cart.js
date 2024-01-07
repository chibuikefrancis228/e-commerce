const  Cart = require ("../models/Cart");


const createCart = async (req,res,next)=>{
    const newCard = new Cart(req.body)
    try{
        const savedCart = await newCart.save();
        res.status(200).json(savedCart)
    }catch(err){
        res.status(500).json(err)
    }
}

const updateCart = async (req,res,next)=>{
    try{
        const updated = await Cart.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(200).json(updated)
    }catch(err){
        res.status(500).json(err)
    }
}

const deleteCart = async (req,res,next)=>{
    try{
        await Cart.findByIdAndDelete(req.params.id )
       res.status(200).json("it has been deleted")
   }catch(err){
       res.status(500).json(err)
   }
}

const getCart = async (req,res,next)=>{
    
    try{
        const hot = await Cart.findById(req.params.id)
        res.status(200).json(hot)
    }catch(err){
        res.status(500).json(err)
    }
}

const getCarts = async (req,res,next)=>{
  try{
    
    const Cart = await Cart.find().limit(3)
    res.status(200).json(Cart)
}catch(err){
    res.status(500).json(err) 
 }
}



module.exports = {
   createCart,
   deleteCart,
   getCart,
   getCarts,
   updateCart,
}