const express = require("express")
const {
   
   createOrder,
   deleteOrder,
   getOrder,
   getOrders,
   updateOrder,
 } = require ("../controllers/order");
const {verifyAdmain } =  require("../utils/verifytoken.js")


 const router = express.Router()

 

 router.post("/" , createOrder,verifyAdmain)

 router.put("/:id",verifyAdmain,updateOrder)

 router.delete("/:id",verifyAdmain,deleteOrder)
 

 router.get("/fine/:id", getOrder)

    

 router.get("/", getOrders )
 

 module.exports = router;