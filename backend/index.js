const express = require ('express')
const mongoose = require("mongoose")
const dotenv = require ("dotenv")
const RouterUsers = require ("./routes/users")
const Routerauth = require ("./routes/auth")
const productRoute = require ("./routes/product")
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cookieParser = require("cookie-parser")
const cors = require("cors");

dotenv.config()
const app = express();


const connect = async () =>{
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("connected to mongodb")
    }catch (error){
        throw error
    }
}



mongoose.connection.on("disconnectionted", ()=>{
    console.log('mogodb disconnected')
})  
app.use(cookieParser())
app.use(express.json())

app.use(cors());
app.use("/auth", Routerauth);
app.use("/users", RouterUsers);
app.use("/products", productRoute);
app.use("/cart", cartRoute)
app.use("/orders", orderRoute);
app.use("/checkout", stripeRoute);




app.listen(4000, ()=>{
    connect()
    console.log('connected')
})