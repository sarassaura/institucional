import type { ReactNode } from "react";
import Title from "../../components/Title";
import Container from "../../components/Container";
import SubTitle from "../../components/Subtitle";
import videoInstitucional from "../../../../assets/images/imagem-instucional.png";
import { Box } from "@mui/material";

function About(): ReactNode {
  return (
    <Container>
      <Title variant="h2">Sobre a Bike Anjo</Title>
      <SubTitle width="1036px" textAlign="center">
        A Bike Anjo é uma rede de voluntáries que ensina pessoas a pedalar,
        indica rotas seguras e acompanha seus primeiros trajetos. Acreditamos
        bicicleta como ferramenta de transformação para pessoas e mais humanas.
      </SubTitle>
      <Box
        sx={{
          marginTop: "40px",
        }}
      >
        <img src={videoInstitucional} alt="Vídeo Institucional" />
      </Box>
    </Container>
  );
}

export default About;
