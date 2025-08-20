import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
 
const HeaderMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        // Scrolling up
        setShowSticky(true);
      } else {
        // Scrolling down
        setShowSticky(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`main-header ${showSticky ? "sticky" : ""}`} id="mobile-manu">
      <div className="header-wrapper">
        <div className="logo">
          <Link to="/">
            <img src="/assets/img/boulo-ipo-logo.png" alt="Logo"  className="mobile-nav-logo"/>
          </Link>
        </div>

        <nav className="desktop-menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/roles">Roles</Link></li>
            <li><Link to="/service">Services</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </nav>

        <button className="menu-toggle" onClick={() => setMenuOpen(true)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          ✕
        </button>
        <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/roles" onClick={() => setMenuOpen(false)}>Roles</Link></li>
          <li><Link to="/service" onClick={() => setMenuOpen(false)}>Services</Link></li>
          <li><Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
          <li><Link to="/Career" onClick={() => setMenuOpen(false)}>Career</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      </div>

      {/* Backdrop */}
      {menuOpen && <div className="backdrop" onClick={() => setMenuOpen(false)}></div>}
    </header>
  );
};

export default HeaderMobile;
