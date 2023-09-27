import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
       
        <div className="home-text-section">
          <h1 className="primary-heading">
            Ocean Climate walk 23/04/2024 - 18:00 Los Angeles California
          </h1>
          <p className="primary-text">
            Do not ignore the damage that is being done to our planet. Our oceans are being polluted and we as humans are not the only ones suffering. Join us as we fight for our planet and its marine life.
          </p>
          <button className="secondary-button">
            Join us <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
