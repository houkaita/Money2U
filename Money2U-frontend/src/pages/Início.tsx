import { Container } from "react-bootstrap";
import { MyModal } from "../components/MyModal"

export function Incício() {
  return (
      <Container>
        <div className="video-responsive">
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/DiHNjdgE_9o`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
        <div>
          <h1 className="text-white first-text ">
            Para analisarmos os possíveis créditos e adequações, precisaremos
            dos seguintes dados:
          </h1>
          <h3 className="text-white analyse-requirements-first ">
            XML das notas fiscais emitidas no ano de 2020 e/ou 2021 Extrato do
            Simples Nacional do mesmo período. Melhores resultados para :
          </h3>
          <h5 className="text-white analyse-requirements-second">
            farmácias, perfumarias, cosméticos, autopeças, oficinas, postos de
            gasolina, lojas de conveniência, depósitos de bebidas, bares,
            restaurantes, lanchonetes, padarias, minimercados, mercados e
            serviços afins ou similares.
          </h5>
        </div>
        <MyModal></MyModal>
      </Container>
  );
}
