// src/components/Depoimentos.jsx

// 1. Importações atualizadas: Removemos Row e Col, e adicionamos Carousel
import { Card, Image, Carousel } from 'react-bootstrap';

const testimonials = [
  { name: 'Andy Xavier', comment: 'Excelente pessoa e excelente profissional ! Realizei diversos tratamentos com ele, e por último fiz 10 lentes em resina composta, resultado final surpreendente.', avatar:"https://cdn-icons-png.flaticon.com/512/3665/3665909.png" },
  { name: 'Sara Santana', comment: 'Excelente profissional e pessoa, muito atencioso, detalhista e caprichoso no que faz, recomendo muito.👏', avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTTTWVbQlafzMF_tq69ubeFpKUzC0LCb8UVg&s" },
  { name: 'Fernanda Pereira', comment: 'Atendimento diferenciado! Dr.João e sua secretária Jéssica são sensacionais! O cuidado e carinho que tratam os pacientes fazem toda a diferença! Eu e minha filha amamos!', avatar:"data:image/png;base64,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"}
];

const Depoimentos = () => {
  return (
    // Mantive a classe 'p-4' para um espaçamento interno
    <section id="depoimentos" className="py-5 p-4 bg-light">
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold">O que nossos pacientes dizem</h2>
        <p className="lead text-muted">A satisfação de quem confia em nosso trabalho.</p>
      </div>

      {/* 2. A <Row> foi substituída pelo componente <Carousel> */}
      <Carousel variant="dark" indicators={false}>
        {testimonials.map((testimonial, index) => (
          // 3. Cada item do map agora é um <Carousel.Item>
          <Carousel.Item key={index}>
            {/* 4. O conteúdo foi reestruturado para ficar bem dentro de um slide */}
            <div className="text-center mx-auto px-5" style={{ maxWidth: '800px' }}>
              <Image 
                src={testimonial.avatar} 
                roundedCircle 
                width="80" 
                height="80" 
                className="mb-3" 
              />
              <p className="lead fst-italic">"{testimonial.comment}"</p>
              <p className="fw-bold mt-4 mb-5">{testimonial.name}</p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default Depoimentos;