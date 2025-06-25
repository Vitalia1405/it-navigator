// src/pages/Contacts.jsx
import React, { useState } from "react";
import "../styles/Contacts.css";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Надсилаємо…");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      console.log("Response status:", res.status, res.statusText);
      const contentType = res.headers.get("content-type") || "";
      let data;

      if (contentType.includes("application/json")) {
        data = await res.json();
        console.log("JSON response:", data);
      } else {
        const text = await res.text();
        console.warn("Non-JSON response body:", text);
        throw new Error("Неправильний формат відповіді від сервера");
      }

      if (res.ok && data.success) {
        setStatus("✅ Повідомлення надіслано!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(`❌ Помилка: ${data.error || res.statusText}`);
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setStatus("❌ Неможливо зв’язатися з сервером або отримано некоректну відповідь");
    }

    setTimeout(() => setStatus(""), 5000);
  };

  return (
    <div className="contacts-container">
      <h1>📞 Контакти</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Ваше ім’я"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Ваш email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Ваше повідомлення…"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Надіслати</button>
      </form>
      {status && <p className="status">{status}</p>}
    </div>
  );
}
