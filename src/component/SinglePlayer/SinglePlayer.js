import React from "react";
// import Cart from "../cart/Cart";
import "./SinglePlayer.css";

const SinglePlayer = ({ player, handleAddToCart }) => {
  const { img, title, age, time } = player;
  
  return (
    <div>
      <div className="info-container">
        <div>
          <img src={img} alt="" />
          <div className="player-info">
            <h2 className="name">{title}</h2>
            <p></p>
            <h4>For Age: {age}</h4>
            <h4>Time Required: {time}</h4>
            <button
              onClick={() => handleAddToCart(player)}
              className="btn-addToList"
            >
              Add to list
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePlayer;
