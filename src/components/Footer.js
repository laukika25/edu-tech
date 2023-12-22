import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer subscription">
        {/* <p className="footer-subscription-heading">
          KARO ABHAYAAS 112, ELECTRONIC CITY BANGALORE, INDIA
        </p> */}
        <div class="footer-logo">
          <Link to="/" className="social-logo">
            Karo Abhayaas
            <i class="fab fa-typo3" />
          </Link>
        </div>
        <p className="footer-subscription-text">
          "We are committed to help the young aspirants in their career vision
          to make their dreams come true of pursuing Medical fields from the top
          premier institutes of our country."
        </p>
        <p className="footer-subscription-heading">
          KARO ABHAYAAS, 112, ELECTRONIC CITY, BANGALORE, INDIA
        </p>
      </section>

      <section class="social-media">
        <div class="social-media-wrap">
          <div class="social-icons">
            <p>FOLLOW US ON: </p>
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
