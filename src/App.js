import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home";
import Login from "./Login/Login";
import { ToastContainer } from "react-toastify";
import Cart from "./component/Cart/Cart";
import SetItem from "./State/SetItem";
import Signup from "./Login/Signup";
import Productpage from "./Pages/Productpage";
import Header from "./component/Header";
import AllProduct from './List/AllProduct'




function App() {
  return (
    <SetItem>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/productpage/:id" element={<Productpage />} />
          <Route path="/productlist" element={<AllProduct/>}></Route>
        </Routes>
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />

      </BrowserRouter>
    </SetItem>
  );
}

export default App;
