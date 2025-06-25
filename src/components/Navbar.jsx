import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <NavLink to="/" className="logo">IT Navigator</NavLink>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>Головна</NavLink>
        <NavLink to="/ai" onClick={() => setMenuOpen(false)}>Штучний інтелект</NavLink>
        <NavLink to="/blockchain" onClick={() => setMenuOpen(false)}>Блокчейн</NavLink>
        <NavLink to="/cybersecurity" onClick={() => setMenuOpen(false)}>Кібербезпека</NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)}>Про сайт</NavLink>
        <NavLink to="/contacts" onClick={() => setMenuOpen(false)}>Контакти</NavLink>
        <NavLink to="/admin/contacts" onClick={() => setMenuOpen(false)}>Адмін. панель</NavLink>
      </nav>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
}
