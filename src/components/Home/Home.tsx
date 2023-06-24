import { Stack } from "@chakra-ui/react";
import { Hero, Projects, AboutMe, StackSection } from ".";
import FooterSection from "./Footer/FooterSection";

const Home = () => {
  return (
    <Stack gap={12}>
      <Hero />
      <StackSection />
      <Projects />
      <AboutMe />
      <FooterSection />
    </Stack>
  );
};

export default Home;
