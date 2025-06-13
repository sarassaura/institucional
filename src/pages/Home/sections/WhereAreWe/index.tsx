import type { ReactNode } from "react";
import Title from "../../components/Title";
import SubTitle from "../../components/Subtitle";
import Container from "../../components/Container";
import map from "../../../../assets/images/map.png";
import { Box } from "@mui/material";

function WhereAreWe(): ReactNode {
  return (
    <Container secondary gap="32px">
      <Box
        sx={{
          textAlign: "center",
          width: "1036px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Title variant="h2">Onde estamos</Title>
        <SubTitle>Saiba onde encontrar iniciativas para participar</SubTitle>
      </Box>
      <Box
        sx={{
          marginTop: "8px",
        }}
      >
        <img src={map} alt="Mapa com as iniciativas da Bike Anjo" />
      </Box>
    </Container>
  );
}

export default WhereAreWe;
