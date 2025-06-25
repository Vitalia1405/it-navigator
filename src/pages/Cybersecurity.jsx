import React, { useState } from "react";
import "../styles/AI.css"; // Уніфікований стиль

export default function Cybersecurity() {
  const [openModal, setOpenModal] = useState(null);
  const [activeTab, setActiveTab] = useState("theory");

  const handleOpen = (id) => {
    setOpenModal(id);
    setActiveTab("theory");
  };

  const handleClose = () => setOpenModal(null);

  const renderModalContent = (id) => {
    switch (id) {
      case "phishing":
        return {
          title: "🎣 Фішинг-атаки",
          theory: "Фішинг — це вид соціальної інженерії, який полягає у виманюванні конфіденційних даних шляхом обману (листів, фейкових сайтів).",
          example: "Шахраї можуть створити копію сайту банку і змусити користувача ввести логін/пароль — дані потрапляють до зловмисника."
        };
      case "firewall":
        return {
          title: "🧱 Брандмауери",
          theory: "Брандмауер (firewall) — система, що контролює мережевий трафік і запобігає несанкціонованому доступу.",
          example: "Корпоративні мережі використовують апаратні та програмні брандмауери для фільтрації шкідливих запитів."
        };
      case "encryption":
        return {
          title: "🔐 Шифрування",
          theory: "Шифрування — перетворення даних у форму, що недоступна без ключа. Захищає листування, бази даних, паролі.",
          example: "Месенджери як Signal або Telegram використовують наскрізне шифрування (E2EE) для приватності розмов."
        };
      case "pentest":
        return {
          title: "🧪 Тестування на проникнення",
          theory: "Пентест — це симуляція атаки на систему з метою виявлення вразливостей до того, як ними скористається зловмисник.",
          example: "Етичні хакери можуть зламати власний сайт компанії і скласти звіт з пропозиціями щодо посилення безпеки."
        };
      default:
        return null;
    }
  };

  const modalData = renderModalContent(openModal);

  return (
    <div className="ai-container">
      <h1>Кібербезпека</h1>
      <p>
        Кібербезпека — це комплекс заходів для захисту комп’ютерних систем, мереж і даних від несанкціонованого доступу,
        атак, витоків і зловживань. У цифрову епоху вона стала критично важливою як для окремих користувачів, так і для організацій.
      </p>

      <section className="ai-section">
        <h2>🔍 Приклади використання</h2>
        <ul>
          <li>
            🎣 Фішинг-атаки
            <button className="inline-btn" onClick={() => handleOpen("phishing")}>Докладніше</button>
          </li>
          <li>
            🧱 Брандмауери
            <button className="inline-btn" onClick={() => handleOpen("firewall")}>Докладніше</button>
          </li>
          <li>
            🔐 Шифрування
            <button className="inline-btn" onClick={() => handleOpen("encryption")}>Докладніше</button>
          </li>
          <li>
            🧪 Тестування на проникнення
            <button className="inline-btn" onClick={() => handleOpen("pentest")}>Докладніше</button>
          </li>
        </ul>
      </section>

      <section className="ai-section">
        <h2>📚 Корисні матеріали</h2>
        <ul>
          <li>
            <a href="https://uk.wikipedia.org/wiki/Кібербезпека" target="_blank" rel="noreferrer">
              Вікіпедія: Кібербезпека
            </a>
          </li>
          <li>
            <a href="https://www.kaspersky.com/resource-center/definitions/what-is-cyber-security" target="_blank" rel="noreferrer">
              Kaspersky: What is Cybersecurity?
            </a>
          </li>
          <li>
            <a href="https://www.cybersecurityguide.org/" target="_blank" rel="noreferrer">
              Cybersecurity Guide
            </a>
          </li>
        </ul>
      </section>

      {openModal && modalData && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{modalData.title}</h3>
            <div className="tab-buttons">
              <button className={activeTab === "theory" ? "active" : ""} onClick={() => setActiveTab("theory")}>
                📘 Теорія
              </button>
              <button className={activeTab === "example" ? "active" : ""} onClick={() => setActiveTab("example")}>
                🧪 Приклад
              </button>
            </div>
            <div className="tab-content">
              <p>{activeTab === "theory" ? modalData.theory : modalData.example}</p>
            </div>
            <button className="close-button" onClick={handleClose}>Закрити</button>
          </div>
        </div>
      )}
    </div>
  );
}
