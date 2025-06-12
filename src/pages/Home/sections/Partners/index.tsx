import type { ReactNode } from "react";
import Title from "../../components/Title";
import Container from "../../components/Container";
import { Box } from "@mui/material";
import itauImage from "@assets/images/Home/Partners/itau.png";
import ccaImage from "@assets/images/Home/Partners/cca.png";
import tembiciImage from "@assets/images/Home/Partners/tembici.png";
import ccImage from "@assets/images/Home/Partners/cc.png";
import ucbImage from "@assets/images/Home/Partners/ucb.png";

function Partners(): ReactNode {
  return (
    <Container gap="48px">
      <Title variant="h2">Parceiros</Title>
      <Box display={"flex"} sx={{ gap: "44px" }} alignItems={"center"}>
        <img src={itauImage} alt="itauImage" height={88} width={88} />
        <img src={ccaImage} alt="ccaImage" height={106} width={159} />
        <img src={tembiciImage} alt="tembiciImage" height={100} width={122} />
        <img src={ccImage} alt="ccImage" height={47} width={304} />
        <img src={ucbImage} alt="ucbImage" height={89} width={122} />
      </Box>
    </Container>
  );
}

export default Partners;
