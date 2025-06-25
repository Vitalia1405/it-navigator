import React, { useState } from "react";

export default function LoginForm({ onLogin, onSwitch }) {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onLogin({ name: "Користувач", email: form.email }); // можна перевірку замінити на API
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>🔐 Вхід</h2>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Пароль" onChange={handleChange} required />
      <button type="submit">Увійти</button>
      <p className="auth-switch" onClick={onSwitch}>Ще не маєш акаунту? Зареєструйся</p>
    </form>
  );
}
