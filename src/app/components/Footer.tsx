import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import Link from "next/link";
export const Footer = () => {
  return (
    <footer>
      {/* Left Section */}
      <div className="footer-left">
        <p>
          Contact us <FaPhone />: 123-456-7890
        </p>
        <p>
          Email: <br />
          <FaEnvelope />{" "}
          <Link
            href={"/"}
            style={{ fontStyle: "italic", textDecoration: "underline" }}
          >
            jewellary@example.com
          </Link>
        </p>
        <p>&copy; 2024 The Jewellary. All rights reserved.</p>
      </div>

      {/* Center Section */}
      <div className="footer-center">
        <ul>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <Link
              href={"/"}
              style={{ textDecoration: "underline", marginLeft: "8px" }}
            >
              Store Locations
            </Link>
          </li>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <Link
              href={"/"}
              style={{ textDecoration: "underline", marginLeft: "8px" }}
            >
              Payment Options
            </Link>
          </li>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <Link
              href={"/"}
              style={{ textDecoration: "underline", marginLeft: "8px" }}
            >
              Return Policy
            </Link>
          </li>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <Link
              href={"/"}
              style={{ textDecoration: "underline", marginLeft: "8px" }}
            >
              Terms & Conditions
            </Link>
          </li>
        </ul>
      </div>

      {/* Middle Section */}
      {/* Feedback Section */}
      <div className="feedback-section">
        <h1>Feedback</h1>
        <form className="feedback-form">
          <textarea placeholder="Message" />
          <button type="submit">Send</button>
        </form>
      </div>

      {/* Right Section */}
      <div className="footer-right">
        <div className="social-icons">
          <a href="#" aria-label="Facebook">
            <FaFacebook /> Facebook
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram /> Instagram
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter /> Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};
