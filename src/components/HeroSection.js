import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/vid8.mp4" autoPlay loop muted />

      <h1>Karo Abhayaas: Learn Today, Lead Tomorrow</h1>
      <p>
        We are committed to help the young aspirants in their career vision to
        make their dreams come true of pursuing Medical field from the top
        premier institutes of our country.
      </p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          ENROLL NOW
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          CONTACT NOW
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
