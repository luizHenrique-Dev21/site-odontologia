// src/components/Contato.jsx
import { Row, Col, Button, Card } from 'react-bootstrap';
import { MapPin, Phone, Mail, Clock} from 'lucide-react'; // Ícones para um visual moderno
import { Instagram, Facebook, Youtube } from 'lucide-react';

const Contato = () => {
  // --- INFORMAÇÕES PERSONALIZÁVEIS ---
  const endereco = "R. Francisco Otaviano, 798 - Jardim Chapadão, Campinas - SP, 13070-056";
  const telefone = "5519981087716"; // Use o formato internacional: País+DDD+Número
  // Link "Compartilhar" do Google Maps
  const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500.1718669859042!2d-47.07441551371677!3d-22.882041785948783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c7266e6c6817%3A0x4fe84486fa0018d5!2sDr%20Jo%C3%A3o%20Junior!5e1!3m2!1spt-BR!2sbr!4v1760462412795!5m2!1spt-BR!2sbr"
  const whatsappUrl = `https://wa.me/${telefone}?text=${encodeURIComponent("Olá! Gostaria de agendar uma avaliação.")}`;

  return (
    <section id="contato" className="py-5 bg-white p-4">
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold">Nossa Localização</h2>
        <p className="lead text-muted">Estamos prontos para receber você!</p>
      </div>
      <Row className="g-5 align-items-center">

        {/* Coluna da Esquerda: Informações de Contato */}
        <Col lg={6}>
          <Card className="border-0 shadow-sm p-4 h-100">
            <Card.Body>
              <h3 className="fw-bold mb-4">Entre em Contato</h3>
              
              <div className="d-flex align-items-start mb-4">
                <MapPin size={24} className="text-primary me-3 flex-shrink-0 mt-1" />
                <div>
                  <h5 className="fw-bold">Endereço</h5>
                  <p className="text-muted mb-0">{endereco}</p>
                </div>
              </div>
              
              <div className="d-flex align-items-start mb-4">
                <Phone size={24} className="text-primary me-3 flex-shrink-0 mt-1" />
                <div>
                  <h5 className="fw-bold">Telefone</h5>
                  <a href={`tel:${telefone}`} className="text-muted text-decoration-none">{telefone}</a>
                </div>
              </div>

              <div className="d-flex align-items-start mb-4">
                <Instagram size={24}className="text-primary me-3 flex-shrink-0 mt-1" />
                <div>
                  <h5 className="fw-bold">Redes Sociais</h5>
                  <a href="https://www.instagram.com/dr.joaojunior/" className="text-black me-5">dr.joaojunior</a>
                </div>
              </div>

              <div className="d-flex align-items-start">
                <Clock size={24} className="text-primary me-3 flex-shrink-0 mt-1" />
                <div>
                  <h5 className="fw-bold">Horário de Funcionamento</h5>
                  <p className="text-muted mb-0">Segunda a Sexta: 09:00 - 18:00</p>
                  <p className="text-muted mb-0">Sábados: 09:00 - 12:00</p>
                </div>
              </div>

              <Button size="lg" className="mt-4 w-100 rounded-pill btn-dourado" href={whatsappUrl} target="_blank">
                <i className="bi bi-whatsapp me-2"></i> Chamar no WhatsApp
              </Button>

            </Card.Body>
          </Card>
        </Col>

        {/* Coluna da Direita: Mapa do Google */}
        <Col lg={6}>
          <iframe
            src={googleMapsUrl}
            className="w-100 rounded shadow"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização do Consultório"
          ></iframe>
        </Col>
        
      </Row>
    </section>
  );
};

export default Contato;