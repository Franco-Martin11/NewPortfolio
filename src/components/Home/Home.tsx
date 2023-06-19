import { Stack } from "@chakra-ui/react";
import { Hero, Projects, AboutMe } from ".";

const Home = () => {
  return (
    <Stack gap={12}>
      <Hero />
      <Projects />
      <AboutMe />
    </Stack>
  );
};

export default Home;
