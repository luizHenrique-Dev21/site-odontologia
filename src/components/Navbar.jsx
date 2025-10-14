// src/components/Navbar.jsx

// 1. Importe a imagem do logo
import logo from '../assets/logo.png'; // <-- AJUSTE O CAMINHO SE NECESSÁRIO
import { Navbar, Nav, Button } from 'react-bootstrap';

const AppNavbar = () => {
  return (
    <Navbar expand="xl" className="shadow-sm p-3 navcolor">
      {/* 2. Substitua o texto pela tag de imagem */}
      <Navbar.Brand href="#inicio" >
        <img
          src={logo}
          height="80" // Ajuste a altura conforme necessário
          className="d-inline-block align-top logo"
          alt="Logo da clínica João Junior"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto align-items-center">
          <Nav.Link href="#inicio">Início</Nav.Link>
          <Nav.Link href="#servicos">Serviços</Nav.Link>
          <Nav.Link href="#portfolio">Portfólio</Nav.Link>
          <Nav.Link href="#depoimentos">Depoimentos</Nav.Link>
          <Nav.Link href="#contato">Contato</Nav.Link>
          <Button href="#contato" className="ms-lg-3 rounded-pill btn-dourado">
            Agendar Consulta
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;;