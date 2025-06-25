const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.join(__dirname, "main.db");
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("❌ SQLite connection error:", err.message);
  } else {
    console.log("✔️ Connected to SQLite at", dbPath);
  }
});

db.serialize(() => {
  db.run(
    `CREATE TABLE IF NOT EXISTS contacts (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       name TEXT NOT NULL,
       email TEXT NOT NULL,
       message TEXT NOT NULL,
       timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
     )`,
    (err) => {
      if (err) {
        console.error("❌ Create table error:", err.message);
      } else {
        console.log("✔️ Table 'contacts' ready");
      }
    }
  );
});

module.exports = db;
