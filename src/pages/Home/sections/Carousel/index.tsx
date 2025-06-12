import type { ReactNode } from "react";
import Title from "../../components/Title";
import SubTitle from "../../components/Subtitle";
import Container from "../../components/Container";

function Carousel(): ReactNode {
  return (
    <Container secondary>
      <Title variant="h2">Uma comunidade que pedala por um futuro melhor</Title>
      <SubTitle>
        Conectamos pessoas dispostas a ajudar com quem precisa de apoio para
        pedalar, oferecendo orientação, rotas seguras e acompanhamento no
        percurso.
      </SubTitle>
    </Container>
  );
}

export default Carousel;
