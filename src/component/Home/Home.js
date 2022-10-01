import React, { useEffect, useState } from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLocationDot,} from "@fortawesome/free-solid-svg-icons";
import goodHealth from "../../Image/good-health.jpg";
import dp from "../../images/dp.png";

import "../Cart/Cart";
import SinglePlayer from "../SinglePlayer/SinglePlayer";
import Cart from "../Cart/Cart";
import { addToDb, getStoredCart } from "../Utilities/localStorage";

const Home = () => {
  const [players, setPlayers] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  useEffect(() => {
    const storedCart = getStoredCart();
    for (const time in storedCart) {
      const addedTime = players.find((player) => player.time === time);
      if (addedTime) {
      }
    }
  }, [players]);
  const handleAddToCart = (player) => {
    // console.log(player.time);
    const newCart = [...cart, player];
    setCart(newCart);
    addToDb(player.time);
  };

  return (
    <div className="home-container">
      <div className="left-side">
        <div className="title-container">
          <span className="builder">
            <img src={goodHealth} alt="" />
          </span>
          <span>
            <h2>Fitness Club</h2>
          </span>
        </div>
        <hr />
        <h3 className="select">Select today's exercise</h3>
        <div className="player-container">
          {players?.map((player) => (
            <SinglePlayer
              player={player}
              key={players.idPlayer}
              players={players}
              setPlayers={setPlayers}
              cart={cart}
              setCart={setCart}
              handleAddToCart={handleAddToCart}
            ></SinglePlayer>
          ))}
        </div>
      </div>
      <div className="right-side">
        <div className="profile-container">
          <div>
            <img src={dp} alt="" />
          </div>
          <div className="author">
            <h3>Mohammad Yeasin Chy</h3>
            <p>Web Developer</p>
            <div className="location">
              <span className="icon">
                <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
              </span>
              <span className="city"> Chattogram, Bangladesh</span>
            </div>
          </div>
        </div>
        <div className="body-info">
          <div>
            <h2>
              54<small>kg</small>
            </h2>
            <h3 className="measure">Weight</h3>
          </div>
          <div>
            <h2>5.3</h2>
            <h3 className="measure">Height</h3>
          </div>
          <div>
            <h2>
              24<small>yrs</small>
            </h2>
            <h3 className="measure">Age</h3>
          </div>
        </div>
        <h3 className="break">Add a break</h3>
        <div className="btn-container">
          <div>
            <button className="btn-sec">10s</button>
            <button className="btn-sec">20s</button>
            <button className="btn-sec">30s</button>
            <button className="btn-sec">40s</button>
            <button className="btn-sec">50s</button>
          </div>
        </div>
        {/* ..........................cart.............................. */}

        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Home;
