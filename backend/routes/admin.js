const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router();

const ADMIN_USER = "admin";
const ADMIN_PASS_HASH = "$2b$10$aqJMi9UWS5.ZRxM5oA6Z7ePnlTnVL2Mnn2YX3XX5tQUV4Zg8sPHNu"; // пароль "123456"

const SECRET = "your_jwt_secret"; // бажано зробити через .env

// POST /api/admin/login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (username !== ADMIN_USER)
    return res.status(401).json({ success: false, error: "Невірний логін" });
  const passOk = await bcrypt.compare(password, ADMIN_PASS_HASH);
  if (!passOk)
    return res.status(401).json({ success: false, error: "Невірний пароль" });

  // Створюємо токен
  const token = jwt.sign({ username: ADMIN_USER, role: "admin" }, SECRET, { expiresIn: "8h" });
  res.json({ success: true, token });
});

// Middleware для захисту адмін-роутів
function authMiddleware(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith("Bearer ")) {
    return res.status(401).json({ success: false, error: "Неавторизовано" });
  }
  try {
    const decoded = jwt.verify(auth.slice(7), SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ success: false, error: "Токен недійсний" });
  }
}

module.exports = { router, authMiddleware };
