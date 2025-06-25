// src/pages/Home.jsx
import "../styles/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="home-container">
      <section className="hero">
        <h1>Ласкаво просимо на IT Navigator</h1>
        <p>Платформа, присвячена сучасним інформаційним технологіям: від AI до кібербезпеки</p>
      </section>

      <section className="section">
        <h2>🔍 Популярні напрямки</h2>
        <div className="cards">
          <Link to="/ai" className="card">🤖 Штучний інтелект</Link>
          <Link to="/blockchain" className="card">🔗 Блокчейн</Link>
          <Link to="/cybersecurity" className="card">🛡 Кібербезпека</Link>
        </div>
      </section>

      <section className="section">
        <h2>📰 Останні новини</h2>
        <div className="cards">
          <div className="card">🔧 Google презентувала новий AI-чип</div>
          <div className="card">🍏 Apple переходить на ARM-сервери</div>
          <div className="card">💣 Хакери атакували великого провайдера</div>
        </div>
      </section>

      <section className="section">
        <h2>📚 Навчальні гайди</h2>
        <div className="cards">
          <div className="card">React з нуля до героя</div>
          <div className="card">Як працює GitHub Actions</div>
          <div className="card">Що таке API і як ним користуватись</div>
        </div>
      </section>

      <section className="section">
        <h2>📌 Про сайт</h2>
        <p>
          Цей сайт створений у межах дипломного проєкту як приклад повноцінного веб-додатку на основі React і Express.
          Ви можете переглянути розділи за напрямками, прочитати новини або вивчити технології за допомогою навчальних гайдів.
        </p>
        <Link to="/about" className="button-link">Дізнатись більше →</Link>
      </section>

      <section className="section">
        <h2>📞 Контакти</h2>
        <p>Зв'яжіться з нами: <a href="mailto:it-navigator@example.com">it-navigator@example.com</a></p>
      </section>
    </main>
  );
}
