import type { ReactNode } from "react";
import Title from "../../components/Title";
import Container from "../../components/Container";
import SubTitle from "../../components/Subtitle";
import videoInstitucional from "../../../../assets/images/imagem-instucional.png";
import { Box } from "@mui/material";

function About(): ReactNode {
  return (
    <Container>
      <Box
        sx={{
          textAlign: "center",
          padding: "0 202px",
          display: "flex",
          flexDirection: "column",
          gap: "32px",
        }}
      >
        <Title variant="h2">Sobre a Bike Anjo</Title>
        <SubTitle>
          A Bike Anjo é uma rede de voluntáries que ensina pessoas a pedalar,
          indica rotas seguras e acompanha seus primeiros trajetos. Acreditamos
          na bicicleta como ferramenta de transformação para pessoas e mais
          humanas.
        </SubTitle>
      </Box>
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
