import type { ReactNode } from "react";
import Title from "../../components/Title";
import { Grid, Typography } from "@mui/material";
import GridItem from "./components/GridItem";
import Container from "../../components/Container";

function OurNumbers(): ReactNode {
  return (
    <Container gap="40px">
      <Title variant="h2">Nossos números</Title>
      <Grid container spacing={2} width={1032}>
        <Grid size={12}>
          <GridItem gap="20px">
            <Typography color="tertiary" fontSize={104} lineHeight={1}>
              9450
            </Typography>
            <Typography fontSize={32}>
              pessoas voluntárias cadastradas
            </Typography>
          </GridItem>
        </Grid>
        <Grid size={8}>
          <GridItem column={true}>
            <Typography color="tertiary" fontSize={136} lineHeight={1}>
              40.013
            </Typography>
            <Typography fontSize={32}>pessoas atendidas</Typography>
          </GridItem>
        </Grid>
        <Grid size={4}>
          <GridItem column>
            <Typography color="tertiary" fontSize={80} lineHeight={1}>
              40KG
            </Typography>
            <Typography fontSize={32}>
              a menos de CO&#8322; na atmosfera
            </Typography>
          </GridItem>
        </Grid>
        <Grid size={5}>
          <GridItem gap="8px">
            <Typography color="tertiary" fontSize={64} lineHeight={1}>
              40
            </Typography>
            <Typography fontSize={16}>países pedalando com a gente</Typography>
          </GridItem>
        </Grid>
        <Grid size={7}>
          <GridItem gap="8px">
            <Typography color="tertiary" fontSize={64} lineHeight={1}>
              899
            </Typography>
            <Typography fontSize={16}>cidades impactadas</Typography>
          </GridItem>
        </Grid>
      </Grid>
    </Container>
  );
}

export default OurNumbers;
