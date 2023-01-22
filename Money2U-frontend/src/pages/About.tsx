import { Row, Col, Container } from "react-bootstrap";

export function About() {
  return (
    <article style={{backgroundColor: '#444'}}>
      <Container>
        <Row className="d-flex justify-content-center align-items-center text-white">
          <Col>
            <h2 style={{fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', marginTop: '30px' }}>Quem somos</h2>
            <h4 style={{fontSize: '1.2rem', textAlign: 'center', fontWeight: '200', letterSpacing: '1px'}}>
              A money back surgiu da necessidade de alguns clientes em recuperar
              depósitos judiciais. E com o surgimento de clientes de menor
              porte, identificamos essa dor e necessidade de recuperar valores e
              créditos, que muitas empresas pagam impostos a mais ou até mesmo
              duplicados. Então, identificamos que essa parte do PIS e COFINS,
              pode ser recuperada. Por isso estendemos essa demanda de
              recuperação de depósito judicial para recuperação de PIS e COFINS
              para empresas que são normalmente do regime tributário do Simples
              Nacional, nesse regime tributário conseguimos ajudar muitas
              empresas como: farmácias, bares, restaurantes, oficinas, revenda
              de auto peças, venda de pneus, postos de gasolinas e muitas
              outras.
            </h4>
          </Col>
          <Col>
            <img
              src="https://i.imgur.com/YHya2KH.png"
              style={{ height: "35rem", width: "22rem" }}
              className="ms-auto"
            ></img>
          </Col>
        </Row>
      </Container>
    </article>
  );
}
