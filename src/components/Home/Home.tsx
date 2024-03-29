import { Stack } from "@chakra-ui/react";
import { Hero, Projects, StackSection, Experience } from ".";
import FooterSection from "./Footer/FooterSection";

const Home = () => {
  return (
    <Stack gap={12}>
      <Hero />
      <StackSection />
      <Experience />
      <Projects />
      <FooterSection />
    </Stack>
  );
};

export default Home;
