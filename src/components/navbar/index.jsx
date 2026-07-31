//external import
import React, { useState } from "react";
import { Link } from "react-router-dom";

//internal import
import headImage from "../../images/header.png";
import "./styles.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <div className="header">
      <h2 className="head">
        <img src={headImage} alt="nav-logo" />
        Nextcent
      </h2>

      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <nav className={`navbar ${menuOpen ? "active" : ""}`}>
        <Link
          to="/"
          onClick={() => setActiveMenu(activeMenu === "home" ? null : "home")}
        >
          Home
        </Link>

        <Link
          to="#features"
          onClick={() =>
            setActiveMenu(activeMenu === "features" ? null : "features")
          }
        >
          Features
        </Link>

        <Link
          to="/community"
          onClick={() =>
            setActiveMenu(activeMenu === "community" ? null : "community")
          }
        >
          Community
        </Link>

        <Link
          to="/blog"
          onClick={() => setActiveMenu(activeMenu === "blog" ? null : "blog")}
        >
          Blog
        </Link>

        <Link
          to="/pricing"
          onClick={() =>
            setActiveMenu(activeMenu === "pricing" ? null : "pricing")
          }
        >
          Pricing
        </Link>

        <Link
          to="/register"
          className="register"
          onClick={() =>
            setActiveMenu(activeMenu === "register" ? null : "register")
          }
        >
          Register Now →
        </Link>
      </nav>
    </div>
  );
}
