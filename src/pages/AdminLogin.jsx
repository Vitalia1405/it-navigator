import React, { useState } from "react";

export default function AdminLogin({ onLogin }) {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    const res = await fetch("http://localhost:3001/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (data.success) {
      localStorage.setItem("adminToken", data.token);
      onLogin && onLogin();
    } else {
      setError(data.error || "Помилка входу");
    }
  };

  return (
    <div className="login-container">
      <h1>Вхід адміністратора</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="Логін"
          value={form.username}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Пароль"
          value={form.password}
          onChange={handleChange}
        />
        <button type="submit">Увійти</button>
      </form>
      {error && <div className="error">{error}</div>}
    </div>
  );
}
