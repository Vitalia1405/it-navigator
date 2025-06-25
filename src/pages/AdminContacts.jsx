// src/pages/AdminContacts.jsx
import React, { useEffect, useState } from "react";
import "../styles/AdminContacts.css";

export default function AdminContacts() {
  const [entries, setEntries] = useState([]);
  const [error, setError]     = useState("");

  useEffect(() => {
    // явно звертаємось до бекенду на порт 3001
    fetch("http://localhost:3001/api/contact")
      .then((res) => {
        console.log("GET /api/contact status:", res.status);
        return res.json();
      })
      .then((data) => {
        console.log("GET /api/contact body:", data);
        if (data.success) setEntries(data.entries);
        else setError(data.error || "Невідома помилка");
      })
      .catch((err) => {
        console.error("Fetch /api/contact error:", err);
        setError("Помилка при отриманні даних");
      });
  }, []);

  return (
    <div className="admin-contacts-container">
      <h1>📥 Звернення з Контактів</h1>
      {error && <p className="error">{error}</p>}
      {!error && (
        <table>
          <thead>
            <tr>
              <th>ID</th><th>Ім’я</th><th>Email</th><th>Повідомлення</th><th>Час</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((e) => (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.message}</td>
                <td>{new Date(e.timestamp).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
