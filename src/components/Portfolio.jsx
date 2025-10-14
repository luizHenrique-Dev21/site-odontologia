// src/components/Portfolio.jsx

import { Row, Col } from 'react-bootstrap';

// Defina aqui as imagens que você colocou na pasta public/portfolio
const portfolioImages = [
  { src: '/portfolio/img-1.JPG', alt: 'Aplicação de facetas dentárias' },
  { src: '/portfolio/img-2.JPG', alt: 'Aplicação de facetas dentárias' },
  { src: '/portfolio/img-3.JPG', alt: 'Aplicação de facetas dentárias' },
  { src: '/portfolio/img-4.JPG', alt: 'Aplicação de facetas dentárias' },
  { src: '/portfolio/img-5.JPG', alt: 'Aplicação de facetas dentárias' },
  { src: '/portfolio/img-6.JPG', alt: 'Aplicação de facetas dentárias' },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-5 p-4 bg-white">
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold">Nosso Portfólio</h2>
        <p className="lead text-muted">Veja alguns resultados incríveis de nossos pacientes.</p>
      </div>

      <Row className="g-4">
        {portfolioImages.map((image, index) => (
          <Col key={index} lg={4} md={6}>
            <div className="portfolio-item">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="img-fluid portfolio-image rounded" 
              />
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Portfolio;