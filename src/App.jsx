// src/App.jsx

import AppNavbar from './components/Navbar';
import Hero from './components/Hero';
import Servicos from './components/Servicos';
import Depoimentos from './components/Depoimentos';
import Contato from './components/Contato';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="site-container">
      <AppNavbar />
      <main>
        <Hero />
        <Servicos />
        <Portfolio />
        <Depoimentos />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}

export default App;