import React, { useState } from "react";

export default function RegisterForm({ onRegister, onSwitch }) {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onRegister({ name: form.name, email: form.email }); // або запит до API
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>📝 Реєстрація</h2>
      <input name="name" placeholder="Ім'я" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Пароль" onChange={handleChange} required />
      <button type="submit">Зареєструватися</button>
      <p className="auth-switch" onClick={onSwitch}>Уже маєш акаунт? Увійди</p>
    </form>
  );
}
