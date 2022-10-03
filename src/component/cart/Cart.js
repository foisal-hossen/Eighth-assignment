// import React, { useState } from "react";
import "./Cart.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let ten = 0;


const Cart = ({ cart }) => {
  
  let list = 0;
  for (const player of cart) {
    list = list + parseInt(player.time);
  }
  
  



  const notify = () => {
    toast.success("Congratulations!. You have completed!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="cart-container">
      <div>
        <h3 className="exercise-details">Exercise details</h3>
      </div>
      <div className="exercise-time">
        <h4>Exercise time</h4>
        <h4 className="second"> {list} <span>s</span> </h4>
      </div>
      <div className="break-time">
        <h4>Break time</h4>
        <h4 className="second">{ten}<span> s</span></h4>
      </div>
      <div className="btn-completed">
        <button onClick={notify}>Activity Completed</button>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Cart;
