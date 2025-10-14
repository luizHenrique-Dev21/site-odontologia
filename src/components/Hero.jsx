// src/components/Hero.jsx

import { Button } from 'react-bootstrap';

const Hero = () => {
  const telefone = "5519981087716";
  const imageUrl = '/hero-image.jpg'; 
  const whatsappUrl = `https://wa.me/${telefone}?text=${encodeURIComponent("Olá! Gostaria de agendar uma avaliação.")}`;

  return (
    <section 
      id="inicio" 
      className="hero-section" 
      // AQUI ESTÁ A MUDANÇA: aplicamos o overlay e a imagem juntos
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
          url(${imageUrl})
        `
      }}
    >
      {/* Não precisamos mais da div .hero-content */}
      <h1 className="display-6 fw-bold mb-4">
        Confiança e beleza para cada sorriso. 
      </h1>
      <p className="lead mb-5">
        Tratamentos odontológicos com tecnologia e cuidado humano.
      </p>
      <Button href={whatsappUrl} size="lg" className="rounded-pill px-5 py-3 fw-bold btn-dourado">
        Agendar Avaliação Gratuita
      </Button>
    </section>
  );
};

export default Hero;