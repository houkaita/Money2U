import { Button, Nav, Container, Navbar as Navbarbs } from "react-bootstrap";
import { GiReceiveMoney } from "react-icons/gi";

export function Navbar() {
  return (
    <nav>
      <Navbarbs className="bg-secondary shadow-lg mb-7">
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
}
