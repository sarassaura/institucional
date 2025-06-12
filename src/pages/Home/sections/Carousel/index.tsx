import { Box, Button, Typography } from "@mui/material";
import type { ReactNode } from "react";
import Title from "../../components/Title";
import SubTitle from "../../components/Subtitle";
import Container from "../../components/Container";
import RightArrow from "../../../../assets/images/arrow-right.png";
import LeftArrow from "../../../../assets/images/arrow-left.png";
import StepsCarousel from "../../../../assets/images/steps-carousel.png";

function Carousel(): ReactNode {
  return (
    <Container secondary padding="155px 202px 40px">
      <Box
        sx={{
          position: "relative",
          height: "254px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={LeftArrow}
          alt="Seta para a esquerda"
          style={{
            position: "absolute",
            left: "142px",
            width: "36px",
            height: "36px",
            top: "calc(50% - 18px)",
          }}
        />
        <Box
          height="254px"
          sx={{
            textAlign: "center",
            padding: "0 202px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Title variant="h2">
            Uma comunidade que pedala por um futuro melhor
          </Title>
          <SubTitle fontWeight={400}>
            Conectamos pessoas dispostas a ajudar com quem precisa de apoio para
            pedalar, oferecendo orientação, rotas seguras e acompanhamento no
            percurso.
          </SubTitle>
        </Box>
        <img
          src={RightArrow}
          alt="Seta para a direita"
          style={{
            position: "absolute",
            right: "142px",
            width: "36px",
            height: "36px",
            top: "calc(50% - 18px)",
          }}
        />
      </Box>
      <Box
        height="56px"
        sx={{
          marginTop: "54px",
          marginBottom: "54px",
          display: "flex",
          flexDirection: "row",
          gap: "255px",
        }}
      >
        <Button
          sx={{
            backgroundColor: "var(--mui-palette-neutral-700)",
            color: "var(--mui-palette-neutral-100)",
            padding: "12px 24px",
            borderRadius: "8px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "var(--mui-palette-neutral-100)",
              color: "var(--mui-palette-neutral-900)",
            },
          }}
        >
          <Typography>Aprender a pedalar</Typography>
        </Button>
        <Button
          sx={{
            backgroundColor: "var(--mui-palette-neutral-100)",
            color: "var(--mui-palette-neutral-900)",
            padding: "12px 24px",
            borderRadius: "8px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "var(--mui-palette-neutral-700)",
              color: "var(--mui-palette-neutral-100)",
            },
          }}
        >
          <Typography>Ensinar a pedalar</Typography>
        </Button>
      </Box>
      <img src={StepsCarousel} alt="Passos do Carrossel" />
    </Container>
  );
}

export default Carousel;
