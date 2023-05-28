import { useContext } from "react";
import "./Cart.css";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { IoAddCircle } from "react-icons/io5";
import { AiFillMinusCircle } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/Context";

import blankcart from "../../img/blankcart.jpg"

import Header from "../Header";


const Cart = () => {
  const navigate = useNavigate();
  const Globalstate = useContext(CartContext);
  const state = Globalstate.state;
  localStorage.setItem("usercart", JSON.stringify(state));
  const dispatch = Globalstate.dispatch;
  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const isAuthenticated = localStorage.getItem("user") !== null;

  const handleCheckout = () => {
    if (isAuthenticated) {
      toast.success("Order has been placed");
      localStorage.removeItem("usercart");
      state.map((item) => {
        dispatch({ type: "REMOVE", payload: item });
      });
      navigate("/");
    } else {
      navigate("/signup");
    }
  };

  return (
    <>
      <Header />
      <div className="cart">
        {state.length > 0 ? (
          state.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.image} alt="" />
              <p>{item.title}</p>
              <p>{item.quantity * item.price}</p>
              <div className="quantity">
                <button
                  onClick={() =>
                    dispatch({ type: "INCREASE", payload: item })
                  }
                >
                  <IoAddCircle size={20} />
                </button>

                <p>{item.quantity}</p>

                <button
                  onClick={() => {
                    if (item.quantity > 1) {
                      dispatch({ type: "DECREASE", payload: item });
                    } else {
                      dispatch({ type: "REMOVE", payload: item });
                    }
                  }}
                >
                  <AiFillMinusCircle size={20} />
                </button>
              </div>
              <h2
                onClick={() => dispatch({ type: "REMOVE", payload: item })}
              >
                <RiDeleteBin4Fill className="pointer" />
              </h2>
            </div>
          ))
        ) : (
          <div className="empty-cart">
            <img src={blankcart} alt="Empty Cart" />
            <button className="btn">Continue Shopping</button>
          </div>
        )}

        {state.length > 0 && (
          <>
            <div className="total">
              <h2>₹{total.toFixed(2)}</h2>
            </div>
            <button onClick={handleCheckout} className="btn pointer">
              {isAuthenticated ? "Check Out" : "Login to checkout"}
            </button>

            <ToastContainer
              position="top-center"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </>
        )}
      </div>
    </>
  );
};

export default Cart;