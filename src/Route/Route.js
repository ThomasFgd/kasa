import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header/header';
import APropos from '../pages/a-propos/a-propos.js';
import Home from '../pages/Home/home';
import Error from '../pages/404/404';
import Logement from '../pages/Logement/logement.js';
import Footer from '../components/Footer/footer';

function RoutePath() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/logement" element={<Logement />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default RoutePath;
