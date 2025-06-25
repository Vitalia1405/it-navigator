// src/App.jsx
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Ліниве завантаження сторінок
const Home = lazy(() => import("./pages/Home"));
const AI = lazy(() => import("./pages/AI"));
const Blockchain = lazy(() => import("./pages/Blockchain"));
const Cybersecurity = lazy(() => import("./pages/Cybersecurity"));
const About = lazy(() => import("./pages/About"));
const Contacts = lazy(() => import("./pages/Contacts"));
const AdminContacts = lazy(() => import("./pages/AdminContacts"));
const NotFound = lazy(() => import("./pages/NotFound"));


export default function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="loader">Завантаження…</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/blockchain" element={<Blockchain />} />
          <Route path="/cybersecurity" element={<Cybersecurity />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/admin/contacts" element={<AdminContacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}
