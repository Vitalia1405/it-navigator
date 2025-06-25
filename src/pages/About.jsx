import React from "react";
import "../styles/About.css"; // окремий файл стилів, якщо потрібно

export default function About() {
  return (
    <div className="about-container">
      <h1>Про сайт IT Navigator</h1>

      <section className="about-section">
        <h2>🎯 Мета</h2>
        <p>
          Сайт <strong>IT Navigator</strong> створений з метою популяризації сучасних інформаційних технологій серед
          широкого кола користувачів. Це платформа, яка поєднує в собі новини, навчальні матеріали, огляди технологій,
          інтерв’ю з експертами та корисні посилання — усе, щоб ви залишались в курсі найактуальнішого.
        </p>
      </section>

      <section className="about-section">
        <h2>🧱 Структура платформи</h2>
        <ul>
          <li>📌 <strong>Головна сторінка</strong> — загальний огляд і останні новини зі світу ІТ.</li>
          <li>🧠 <strong>Штучний інтелект</strong> — статті, приклади та посилання на курси.</li>
          <li>🔗 <strong>Блокчейн</strong> — технологія розподіленого реєстру, NFT, криптовалюти.</li>
          <li>🛡 <strong>Кібербезпека</strong> — поради, теорія та приклади практичної захищеності.</li>
          <li>📚 <strong>Навчальні матеріали</strong> — гайди, туторіали, зовнішні ресурси.</li>
          <li>📰 <strong>Новини</strong> — динамічне оновлення через API.</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>💡 Особливості</h2>
        <p>
          IT Navigator розроблено як повноцінний SPA (Single Page Application) з використанням <strong>React</strong> на
          фронтенді та <strong>Node.js / Express + SQLite</strong> на бекенді. Увесь контент генерується динамічно,
          підтримується багатомовність, доступність і мобільна адаптивність.
        </p>
      </section>

      <section className="about-section">
        <h2>📬 Зворотній зв’язок</h2>
        <p>
          Маєш пропозиції, помітив баг чи хочеш приєднатися до команди розробників? Напиши нам на{" "}
          <a href="mailto:it-navigator@example.com">it-navigator@example.com</a>.
        </p>
      </section>
    </div>
  );
}
