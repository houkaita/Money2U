import {
  NavDropdown,
  Button,
  Nav,
  Container,
  Navbar as Navbarbs,
} from "react-bootstrap";
import { GiReceiveMoney } from "react-icons/gi";
import React, { useState, useEffect } from 'react';

/*
export function Navbar() {
  return (
    <nav>
      <Navbarbs className="bg-transparent shadow-lg mb-7">
        <Container>
          <Nav className="me-auto" variant="dark">
            <Nav.Link>Incício</Nav.Link>
            <Nav.Link>Quem somos</Nav.Link>
            <Nav.Link>Serviços</Nav.Link>
            <Nav.Link>Diagnóstico</Nav.Link>
            <Nav.Link>Contato</Nav.Link>
            <Nav.Link>Blog</Nav.Link>
          </Nav>
          <Button
            style={{
              position: "relative",
              width: "4rem",
              height: "4rem",
              color: "#fff",
              background: "none",
              border: "none",
            }}
          >
            <GiReceiveMoney size={55} />
          </Button>
        </Container>
      </Navbarbs>
    </nav>
  );
}*/

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
      <Navbarbs
        collapseOnSelect
        sticky="top"
        expand="lg"
        className={`navbar ${isScrolled ? 'scrolled' : ''}`}
        variant="dark"
      >
        <Container>
          <Navbarbs.Brand href="#home">Money 2 U</Navbarbs.Brand>
          <Navbarbs.Toggle aria-controls="responsive-navbar-nav" />
          <Navbarbs.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>Incício</Nav.Link>
              <Nav.Link>Quem somos</Nav.Link>
              <Nav.Link>Serviços</Nav.Link>
              <Nav.Link>Diagnóstico</Nav.Link>
              <Nav.Link>Contato</Nav.Link>
              <Nav.Link>Blog</Nav.Link>
            </Nav>
            <Nav>
              <GiReceiveMoney size={55} style={{ color: "#f6f6f6" }} />
            </Nav>
          </Navbarbs.Collapse>
        </Container>
      </Navbarbs>
  );
}