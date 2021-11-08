import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  const [badge,setBadge] = useState(0);
  const handleBadgeIncrement = () =>{
    setBadge(badge+1);
  }
  return (
    <div>
      <Navbar badge={badge} />
      <Slider />
      <Products handleBadgeIncrement={handleBadgeIncrement}/>
      <Footer/>
    </div>
  );
};

export default Home;
