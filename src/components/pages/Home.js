import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import Cards from "../Cards";
import Review from "../Review";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Review />
      <Footer />
    </>
  );
}

export default Home;
