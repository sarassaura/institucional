import type { ReactNode } from "react";
import Title from "../../components/Title";
import SubTitle from "../../components/Subtitle";
import Container from "../../components/Container";
import { Box, Button, Typography } from "@mui/material";
import apoieImage from "@assets/images/Home/HowYouCanContribute/apoie.png";
import sendoAnjoImage from "@assets/images/Home/HowYouCanContribute/sendo-anjo.png";
import sendoAprendizImage from "@assets/images/Home/HowYouCanContribute/sendo-aprendiz.png";
import divulgandoImage from "@assets/images/Home/HowYouCanContribute/divulgando.png";

function HowYouCanContribute(): ReactNode {
  return (
    <Container gap="85px">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Title variant="h2">Como você pode contribuir</Title>
        <SubTitle>
          Pedalando, ensinando, apoiando ou divulgando: tem um lugar pra você
          aqui.
        </SubTitle>
      </Box>
      <Box display="flex" sx={{ gap: 5 }}>
        <Box
          sx={{
            width: "225.5px",
            height: "246.6px",
            display: "grid",
            alignItems: "flex-end",
            justifyContent: "center",
            justifyItems: "center",
            alignContent: "space-between",
          }}
        >
          <img src={apoieImage} alt="apoieImage" />
          <Button
            variant={"contained"}
            sx={{
              backgroundColor: "#486284",
              width: "225.5px",
              height: "60px",
              boxShadow: "none",
            }}
          >
            <Typography fontWeight={600} fontSize={21} lineHeight={1}>
              APOIE
            </Typography>
          </Button>
        </Box>
        <Box
          sx={{
            width: "225.5px",
            height: "246.6px",
            display: "grid",
            alignItems: "flex-end",
            justifyContent: "center",
            justifyItems: "center",
            alignContent: "space-between",
          }}
        >
          <img src={sendoAnjoImage} alt="sendoAnjoImage" />
          <Button
            variant={"contained"}
            sx={{
              backgroundColor: "#486284",
              width: "225.5px",
              height: "60px",
              boxShadow: "none",
            }}
          >
            <Typography fontWeight={600} fontSize={21} lineHeight={1}>
              SENDO ANJO
            </Typography>
          </Button>
        </Box>
        <Box
          sx={{
            width: "225.5px",
            height: "246.6px",
            display: "grid",
            alignItems: "flex-end",
            justifyContent: "center",
            justifyItems: "center",
            alignContent: "space-between",
          }}
        >
          <img src={sendoAprendizImage} alt="sendoAprendizImage" />
          <Button
            variant={"contained"}
            sx={{
              backgroundColor: "#486284",
              width: "225.5px",
              height: "60px",
              boxShadow: "none",
            }}
          >
            <Typography fontWeight={600} fontSize={21} lineHeight={1}>
              SENDO APRENDIZ
            </Typography>
          </Button>
        </Box>
        <Box
          sx={{
            width: "225.5px",
            height: "246.6px",
            display: "grid",
            alignItems: "flex-end",
            justifyContent: "center",
            justifyItems: "center",
            alignContent: "space-between",
          }}
        >
          <img src={divulgandoImage} alt="divulgandoImage" />
          <Button
            variant={"contained"}
            sx={{
              backgroundColor: "#486284",
              width: "225.5px",
              height: "60px",
              boxShadow: "none",
            }}
          >
            <Typography fontWeight={600} fontSize={21} lineHeight={1}>
              DIVULGANDO
            </Typography>
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default HowYouCanContribute;
