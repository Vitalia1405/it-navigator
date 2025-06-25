import React, { useState } from "react";
import "../styles/AI.css";

export default function AI() {
  const [openModal, setOpenModal] = useState(null); // 'vision', 'assistant', 'diagnosis', 'autopilot'
  const [activeTab, setActiveTab] = useState("theory");

  const handleOpen = (id) => {
    setOpenModal(id);
    setActiveTab("theory");
  };

  const handleClose = () => setOpenModal(null);

  const renderModalContent = (id) => {
    switch (id) {
      case "vision":
        return {
          title: "📊 Розпізнавання зображень",
          theory: "Технологія комп’ютерного зору дозволяє розпізнавати об'єкти на фото або відео. Алгоритми, такі як CNN (Convolutional Neural Network), навчаються на мільйонах зображень для точного визначення предметів.",
          example: "Google Lens розпізнає текст, предмети, QR-коди. Користувач наводить камеру, і ШІ одразу надає інформацію або посилання."
        };
      case "assistant":
        return {
          title: "🗣 Голосові асистенти",
          theory: "Асистенти, як-от Siri чи Alexa, використовують NLP (Natural Language Processing) та синтез мовлення. Вони перетворюють запити в текст, аналізують їх та надають голосову відповідь.",
          example: "Сказавши 'яка погода завтра?', Siri обробляє голос, шукає відповідь у сервісі погоди та озвучує результат."
        };
      case "diagnosis":
        return {
          title: "🧠 Медична діагностика",
          theory: "ШІ аналізує медичні зображення (КТ, МРТ) з точністю понад 90%. Використовуються нейромережі для виявлення аномалій або прогнозування хвороб.",
          example: "Платформи як Zebra Medical Vision автоматично аналізують рентгенівські знімки на наявність патологій."
        };
      case "autopilot":
        return {
          title: "🚗 Автономне водіння",
          theory: "ШІ керує транспортом завдяки сенсорам, LiDAR, GPS та нейромережам. Працює за допомогою глибокого навчання та алгоритмів планування маршруту.",
          example: "Tesla Autopilot підтримує зміну смуги, автогальмування, рух у потоці без участі водія."
        };
      default:
        return null;
    }
  };

  const modalData = renderModalContent(openModal);

  return (
    <div className="ai-container">
      <h1>Штучний інтелект</h1>
      <p>
        ШІ — галузь комп’ютерних наук, що займається створенням систем, здатних до самонавчання,
        аналізу й прийняття рішень без прямого втручання людини.
      </p>

      <section className="ai-section">
        <h2>🔍 Приклади використання</h2>
        <ul>
          <li>
            📊 Розпізнавання зображень
            <button className="inline-btn" onClick={() => handleOpen("vision")}>Докладніше</button>
          </li>
          <li>
            🗣 Голосові асистенти
            <button className="inline-btn" onClick={() => handleOpen("assistant")}>Докладніше</button>
          </li>
          <li>
            🧠 Медична діагностика
            <button className="inline-btn" onClick={() => handleOpen("diagnosis")}>Докладніше</button>
          </li>
          <li>
            🚗 Автономне водіння
            <button className="inline-btn" onClick={() => handleOpen("autopilot")}>Докладніше</button>
          </li>
        </ul>
      </section>
        <section className="ai-section">
        <h2>📚 Корисні матеріали</h2>
        <ul>
          <li>
            <a href="https://uk.wikipedia.org/wiki/Штучний_інтелект" target="_blank" rel="noreferrer">
              Вікіпедія: ШІ
            </a>
          </li>
          <li>
            <a href="https://www.coursera.org/learn/machine-learning" target="_blank" rel="noreferrer">
              Курс Andrew Ng (Coursera)
            </a>
          </li>
        </ul>
      </section>

      {openModal && modalData && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
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
