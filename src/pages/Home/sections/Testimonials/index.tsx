import type { ReactNode } from "react";
import Title from "../../components/Title";
import SubTitle from "../../components/Subtitle";
import Container from "../../components/Container";

function Testimonials(): ReactNode {
  return (
    <Container secondary>
      <Title variant="h2">Depoimentos</Title>
      <SubTitle>
        Histórias reais de quem já transformou sua relação com a bicicleta.
      </SubTitle>
    </Container>
  );
}

export default Testimonials;
