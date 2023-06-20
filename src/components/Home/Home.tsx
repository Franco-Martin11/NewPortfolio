import { Stack } from "@chakra-ui/react";
import { Hero, Projects, AboutMe } from ".";
import FooterSection from "./Footer/FooterSection";

const Home = () => {
  return (
    <Stack gap={12}>
      <Hero />
      <Projects />
      <AboutMe />
      <FooterSection />
    </Stack>
  );
};

export default Home;
