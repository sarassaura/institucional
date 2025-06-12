import type { ReactNode } from "react";
import OurNumbers from "./sections/OurNumbers";
import Testimonials from "./sections/Testimonials";
import HowYouCanContribute from "./sections/HowYouCanContribute";
import Partners from "./sections/Partners";
import Carousel from "./sections/Carousel";
import About from "./sections/About";
import WhereAreWe from "./sections/WhereAreWe";
import ProjectThatMoveUs from "./sections/ProjectThatMoveUs";

function Home(): ReactNode {
  return (
    <>
      <Carousel />
      <About />
      <WhereAreWe />
      <ProjectThatMoveUs />
      <OurNumbers />
      <Testimonials />
      <HowYouCanContribute />
      <Partners />
    </>
  );
}

export default Home;
