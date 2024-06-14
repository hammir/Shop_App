import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";


const App = () => {
  return (
  <div className=" overflow-y-hidden min-w-[300px]">
       
       <div className=" bg-slate-900">
        <Navbar/>
       </div>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
       </Routes>

  </div>)
};

export default App;
