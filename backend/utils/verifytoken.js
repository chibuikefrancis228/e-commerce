const jwt = require ("jsonwebtoken")


const verifyToken = (req, res, next)=>{
   const token = req.cookies.access_token;
   if(!token){
    return res.status(401).json("you are not authenticated")
   }
   jwt.verify(token, process.env.jwt,(err, user)=>{
    if (err) res.status(403).json("Token is not valid")
    req.user = user;
    next()
   })
}


const verifyuser = (req, res, next)=>{
    verifyToken(req,res, ()=>{
        if(req.user.id === req.params.id || req.user.isAdmain){
            next()
        }else{
            return res.status(401).json("not authorize")
        }

    })
 }

//  const verifyTokenAndAdmain = (req, res, next)=>{
//     verifyToken(req, res,()=>{0
//         if (req.user.isAdmain){
//             next();

//         }else{
//          res.status(403).json("you are not alloed to do that!")
//         }
//     })
// }

 const verifyAdmain = (req, res, next)=>{
    verifyToken(req, res, next,()=>{
        if(req.user.isAdmain){
            next()
        }else{
            return res.status(401).json("not authorize")
        }

    })
 }

 module.exports = {
    verifyToken,
    verifyuser,
     verifyAdmain,
 }

// const jwt = require ("jsonwebtoken")

// const verifyToken = (req,res,next)=>{
//     //const authHeader = req.headers.token;
//     if (req.headers.authorization && 
//         req.headers.authorization.startswicth(Bearer)
//         ){
//         let token = req.beaders.authorization.split("")[1];
//         jwt.verify(token,process.env.jwt,(err,user)=>{
//             if (err) res.status(403).json("Token is not valid")
//             req.user = user;
//             next();
//         })
//     }else{
//         return res.status(401).json("you are not authenticated")
//     }
// }


// const verifyTokenAndAuthorization = (req, res, next)=>{
//     verifyToken(req, res,()=>{
//         if (req.user.id === req.parms.id || req.user.isAdmain){
//             next();
//         }else{
//              res.status(403).json("you are not alloed to do that!")
//         }
//     })
// }

// const verifyTokenAndAdmain = (req, res, next)=>{
//     verifyToken(req, res,()=>{0
//         if (req.user.isAdmain){
//             next();

//         }else{
//          res.status(403).json("you are not alloed to do that!")
//         }
//     })
// }

// module.exports = {
//     verifyToken,
//     verifyTokenAndAuthorization,
//     verifyTokenAndAdmain
// }