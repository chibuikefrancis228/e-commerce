const express = require("express")
const {
   createCart,
   deleteCart,
   getCart,
   getCarts,
   updateCart,
 } = require ("../controllers/cart");
const {verifyAdmain } =  require("../utils/verifytoken.js")


 const router = express.Router()

 

 router.post("/" , createCart,verifyAdmain)

 router.put("/:id",verifyAdmain,updateCart)

 router.delete("/:id",verifyAdmain,deleteCart)
 

 router.get("/fine/:id", getCart)

    

 router.get("/", getCarts )
 

 module.exports = router;