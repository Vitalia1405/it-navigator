// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "4rem" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>404</h1>
      <p style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>
        Сторінку не знайдено
      </p>
      <Link to="/" style={{ fontSize: "1.2rem", color: "#007bff" }}>
        ⬅ Повернутись на головну
      </Link>
    </div>
  );
}
