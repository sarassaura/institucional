import type { ReactNode } from "react";
import Title from "../../components/Title";
import SubTitle from "../../components/Subtitle";
import Container from "../../components/Container";

function HowYouCanContribute(): ReactNode {
  return (
    <Container gap="20px">
      <Title variant="h2">Como você pode contribuir</Title>
      <SubTitle>
        Pedalando, ensinando, apoiando ou divulgando: tem um lugar pra você
        aqui.
      </SubTitle>
    </Container>
  );
}

export default HowYouCanContribute;
