// src/components/Servicos.jsx

// 1. Importações necessárias
import {Card } from 'react-bootstrap';
import { Zap, Bone, Smile, HeartPulse } from 'lucide-react';
import { FaTooth, FaSmileBeam } from "react-icons/fa"
import Carousel from 'react-multi-carousel'; // Importa o carrossel
import 'react-multi-carousel/lib/styles.css'; // Importa o estilo do carrossel
import { IoSparklesOutline } from "react-icons/io5";
import { GiTooth, GiBoltCutter, GiDrill } from "react-icons/gi";
const services = [
  { icon: <IoSparklesOutline size={40} className="text-dourado" />, title: 'Clareamento Dental', description: 'Deixe seus dentes mais brancos e radiantes com nossas técnicas seguras e eficazes.' },
  { icon: < GiTooth size={40} className="text-dourado" />, title: 'Implantes Dentários', description: 'Recupere a função e a estética do seu sorriso com implantes de alta tecnologia.' },
  { icon: <FaTooth size={40} className="text-dourado" />, title: 'Ortodontia (Aparelhos)', description: 'Corrija o alinhamento dos seus dentes com aparelhos modernos e discretos.' },
  { icon: <FaSmileBeam size={40} className="text-dourado" />, title: 'Estética Facial', description: 'Realce sua confiança com facetas dentais que iluminam o seu sorriso e valorizam sua beleza.' },
  { icon: <FaSmileBeam size={40} className="text-dourado" />, title: 'Essencial', description: 'Sorriso saudável: limpeza, restauração e canal.' },
  // Adicione mais serviços se desejar
];

// 2. Configuração de responsividade do carrossel
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4 // Mostra 4 itens em telas grandes
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2 // Mostra 2 itens em tablets
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1 // Mostra 1 item em celulares
  }
};

const Servicos = () => {
  return (
    <section class= 'container' id="servicos" className="py-5 bg-light">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Nossos Serviços</h2>
          <p className="lead text-muted">Oferecemos soluções completas para a saúde e estética do seu sorriso.</p>
        </div>

        {/* 3. Implementação do Carrossel */}
        <Carousel
          responsive={responsive}
          infinite={true} // Navegação infinita
          autoPlay={true} // Rola automaticamente
          autoPlaySpeed={4000}
          keyBoardControl={true}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-40-px"
          className="pb-4"
        >
          {services.map((service, index) => (
            // Adicionamos mx-2 para um espaçamento lateral entre os cards
            <div key={index} className="mx-2 h-100"> 
              <Card className="h-100 text-center p-4 border-0 shadow-sm service-card">
                <Card.Body className="d-flex flex-column">
                  <div className="mb-3">{service.icon}</div>
                  <Card.Title as="h3" className="h5 fw-bold">{service.title}</Card.Title>
                  <Card.Text className="text-muted mt-auto">{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Carousel>
    </section>
  );
};

export default Servicos;