const express = require("express")
const User = require("../models/User")
const {verifyToken, verifyuser, verifyAdmain} =  require("../utils/verifytoken")


 const router = express.Router()

 router.get("/", (req, res)=>{
    res.send("hollo")
 })

 

 

 router.put("/:id",verifyuser, async (req,res)=>{

    try{
        const user = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(200).json(user)
    }catch(err){
        res.status(500).json(err)
    }
 })

 router.delete("/:id",verifyuser, async (req,res)=>{

    try{
         await User.findByIdAndDelete(req.params.id )
        res.status(200).json("it has been deleted")
    }catch(err){
        res.status(500).json(err)
    }
 })

 router.get("/:id",verifyuser, async (req,res)=>{

    try{
        const hot1 = await User.findById(req.params.id)
        res.status(200).json(hot1)
    }catch(err){
        res.status(500).json(err)
    }
 })

 router.get("/",verifyAdmain, async (req,res)=>{

    try{
        const hots2 = await User.find(req.params.id)
        res.status(200).json(hots2)
    }catch(err){
        res.status(500).json(err)
    }
 })
 

 router.get("/stats", verifyAdmain, async (req, res) => {
   const date = new Date();
   const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
 
   try {
     const data = await User.aggregate([
       { $match: { createdAt: { $gte: lastYear } } },
       {
         $project: {
           month: { $month: "$createdAt" },
         },
       },
       {
         $group: {
           _id: "$month",
           total: { $sum: 1 },
         },
       },
     ]);
     res.status(200).json(data)
   } catch (err) {
     res.status(500).json(err);
   }
 });
 
 module.exports = router;