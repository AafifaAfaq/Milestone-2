"use client";
import { useState } from "react";
import React from "react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { CiSearch, CiHeart } from "react-icons/ci";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      {/* Logo Section */}
      <div className="header-left">
        <img
          src="/logo.png"
          alt="logo"
          width={70}
          height={50}
          style={{ color: "white" }}
        />
        <h1 className="logo">The Jewellery</h1>
      </div>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className={isMenuOpen ? "line open" : "line"}></span>
        <span className={isMenuOpen ? "line open" : "line"}></span>
        <span className={isMenuOpen ? "line open" : "line"}></span>
      </div>

      {/* Navigation Links */}
      <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/product">Product</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      {/* Icons Section */}
      <div className="header-icons">
        <a href="#" className="login">
          Login / Register
        </a>
        <CiSearch className="icon" />
        <FaShoppingCart className="icon" />
        <CiHeart className="icon" />
      </div>
    </header>
  );
};
