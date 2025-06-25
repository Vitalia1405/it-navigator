import React, { useState } from "react";
import "../styles/AI.css"; // Використовуємо той самий файл стилів для уніфікації

export default function Blockchain() {
  const [openModal, setOpenModal] = useState(null);
  const [activeTab, setActiveTab] = useState("theory");

  const handleOpen = (id) => {
    setOpenModal(id);
    setActiveTab("theory");
  };

  const handleClose = () => setOpenModal(null);

  const renderModalContent = (id) => {
    switch (id) {
      case "crypto":
        return {
          title: "💸 Криптовалюти",
          theory: "Криптовалюти — це цифрові валюти, засновані на блокчейні. Вони працюють без центрального банку, забезпечуючи прозорість і децентралізацію.",
          example: "Bitcoin, Ethereum — найпопулярніші приклади. Користувачі можуть зберігати, переводити і отримувати токени напряму, без посередників."
        };
      case "supply":
        return {
          title: "📦 Логістика",
          theory: "Блокчейн у логістиці використовується для прозорого відстеження переміщення товарів. Це знижує ризик шахрайства та підробки.",
          example: "Walmart застосовує блокчейн для відстеження шляху продуктів харчування — від ферми до полиці магазину."
        };
      case "contracts":
        return {
          title: "📜 Смарт-контракти",
          theory: "Смарт-контракти — це програми, які автоматично виконуються, коли виконані задані умови. Вони зменшують потребу у посередниках.",
          example: "У сфері нерухомості смарт-контракти можуть автоматично здійснювати передачу прав власності після оплати."
        };
      case "identity":
        return {
          title: "🆔 Цифрова ідентичність",
          theory: "Блокчейн дозволяє створити захищену децентралізовану ідентичність, що зберігає контроль у руках користувача.",
          example: "Проєкти як uPort надають цифрові паспорти, які можна використовувати для входу у сервіси без пароля."
        };
      default:
        return null;
    }
  };

  const modalData = renderModalContent(openModal);

  return (
    <div className="ai-container">
      <h1>Блокчейн</h1>
      <p>
        Блокчейн — це децентралізована технологія зберігання та передачі даних, яка забезпечує
        прозорість, незмінність і безпеку записів. Його використовують не лише в криптовалютах, а й
        у багатьох інших галузях.
      </p>

      <section className="ai-section">
        <h2>🔍 Приклади використання</h2>
        <ul>
          <li>
            💸 Криптовалюти
            <button className="inline-btn" onClick={() => handleOpen("crypto")}>Докладніше</button>
          </li>
          <li>
            📦 Логістика
            <button className="inline-btn" onClick={() => handleOpen("supply")}>Докладніше</button>
          </li>
          <li>
            📜 Смарт-контракти
            <button className="inline-btn" onClick={() => handleOpen("contracts")}>Докладніше</button>
          </li>
          <li>
            🆔 Цифрова ідентичність
            <button className="inline-btn" onClick={() => handleOpen("identity")}>Докладніше</button>
          </li>
        </ul>
      </section>

      <section className="ai-section">
        <h2>📚 Корисні матеріали</h2>
        <ul>
          <li>
            <a href="https://uk.wikipedia.org/wiki/Блокчейн" target="_blank" rel="noreferrer">
              Вікіпедія: Блокчейн
            </a>
          </li>
          <li>
            <a href="https://www.ibm.com/topics/what-is-blockchain" target="_blank" rel="noreferrer">
              IBM: Що таке блокчейн?
            </a>
          </li>
          <li>
            <a href="https://ethereum.org/en/what-is-ethereum/" target="_blank" rel="noreferrer">
              Ethereum.org: Про Ethereum
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
