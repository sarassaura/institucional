import type { ReactNode } from "react";
import OurNumbers from "./sections/OurNumbers";
import Testimonials from "./sections/Testimonials";
import HowYouCanContribute from "./sections/HowYouCanContribute";
import Partners from "./sections/Partners";

function Home(): ReactNode {
  return (
    <>
      <OurNumbers />
      <Testimonials />
      <HowYouCanContribute />
      <Partners />
    </>
  );
}

export default Home;
