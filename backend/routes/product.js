const express = require("express")
const {
   
   createProduct,
   deleteProduct,
   getProduct,
   getProducts,
   updateProduct,
 } = require ("../controllers/products.js");
const {verifyAdmain } =  require("../utils/verifytoken.js")


 const router = express.Router()

 

 router.post("/" , createProduct,verifyAdmain)

 router.put("/:id",verifyAdmain,updateProduct)

 router.delete("/:id",verifyAdmain,deleteProduct)
 

 router.get("/fine/:id", getProduct)

    

 router.get("/", getProducts )
 

 module.exports = router;