const express = require("express");
const cors = require("cors");
require("./database/db");
const contactRoutes = require("./routes/contact");

const adminAuth = require("./routes/admin");

app.use("/api/admin", adminAuth.router);

// Приклад захищеного роуту (тільки для адміна)
app.get("/api/protected", adminAuth.authMiddleware, (req, res) => {
  res.json({ success: true, user: req.user, message: "Доступ дозволено!" });
});
const app = express();
app.use(express.json());
app.use(cors());

// Для перевірки здоров’я сервера (необов’язково)
app.get("/health", (req, res) => res.send("OK"));

// Головний роутер для контактів
app.use("/api/contact", contactRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`✔️ Backend running on http://localhost:${PORT}`);
});
