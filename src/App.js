
import{
  BrowserRouter,
  Routes,
  Navigate,
  Route,
}from "react-router-dom"
import './App.css';
import Home from './pages/Home'
import Details from './pages/ProductList'
import Pay from './pages/pay'
import Success from "./pages/Success"
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import { useSelector } from "react-redux";




function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (  
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/products/:category" element={<Details />} />
    <Route path="/product/:id" element={<Product />} />

    <Route path="/pay" element={<Pay/>} />
    <Route path="/success" element={<Success />} />
    <Route path="/cart" element={<Cart />} />

    <Route path="/login" element={user ?<Navigate to="/"/>:<Login />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
