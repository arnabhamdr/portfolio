import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experiance from "./components/Experiance";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Box } from "@mui/material";

function App() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <About />
      <Experiance />
      <Skills />
      <Projects />
      <Contact />
    </Box>
  );
}

export default App;
