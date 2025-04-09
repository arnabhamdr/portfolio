import { Box } from "@mui/material";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import TimelineSection from "./components/Timeline/TimelineSection.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Routes, Route, BrowserRouter } from "react-router";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Projects from "./pages/Projects.jsx";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Box sx={{ display: "flex", flexGrow: 1 }}>
        <Sidebar />
        <Box sx={{ flexGrow: 1, p: 3 }}>
          <Profile />
          <TimelineSection />
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
