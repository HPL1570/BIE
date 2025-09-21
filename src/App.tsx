import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { ScrollToTop } from './components/ScrollToTop';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { CoalPage } from './pages/CoalPage';
import { SpicesPage } from './pages/SpicesPage';
import { SeafoodPage } from './pages/SeafoodPage';
import { ContactPage } from './pages/ContactPage';
import { CoalDetailsPage } from './pages/CoalDetailsPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/coal" element={<CoalPage />} />
            <Route path="/products/spices" element={<SpicesPage />} />
            <Route path="/products/seafood" element={<SeafoodPage />} />
            <Route path="/products/coal/:type" element={<CoalDetailsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;