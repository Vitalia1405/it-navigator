const express = require("express");
const db = require("../database/db");
const router = express.Router();

// Додати звернення (POST /api/contact)
router.post("/", (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "Усі поля є обов’язковими" });
  }
  const sql = `INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)`;
  db.run(sql, [name, email, message], function (err) {
    if (err) {
      console.error("❌ INSERT Error:", err.message);
      return res.status(500).json({ success: false, error: "Помилка збереження в БД" });
    }
    res.json({
      success: true,
      entry: {
        id: this.lastID,
        name,
        email,
        message,
        timestamp: new Date().toISOString(),
      },
    });
  });
});

// Переглянути всі звернення (GET /api/contact)
router.get("/", (req, res) => {
  const sql = `SELECT * FROM contacts ORDER BY timestamp DESC`;
  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error("❌ SELECT Error:", err.message);
      return res.status(500).json({ success: false, error: "Не вдалося отримати дані" });
    }
    res.json({ success: true, entries: rows });
  });
});

// Переглянути одне звернення за id (GET /api/contact/:id)
router.get("/:id", (req, res) => {
  const sql = `SELECT * FROM contacts WHERE id = ?`;
  db.get(sql, [req.params.id], (err, row) => {
    if (err) {
      console.error("❌ SELECT Error:", err.message);
      return res.status(500).json({ success: false, error: "DB error" });
    }
    if (!row) {
      return res.status(404).json({ success: false, error: "Звернення не знайдено" });
    }
    res.json({ success: true, entry: row });
  });
});

// Видалити звернення (DELETE /api/contact/:id)
router.delete("/:id", (req, res) => {
  const sql = `DELETE FROM contacts WHERE id = ?`;
  db.run(sql, [req.params.id], function (err) {
    if (err) {
      console.error("❌ DELETE Error:", err.message);
      return res.status(500).json({ success: false, error: "DB error" });
    }
    res.json({ success: true, deleted: this.changes });
  });
});

module.exports = router;
