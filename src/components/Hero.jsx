import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import ArnabhaImg from "../assets/image/photo.jpg";

const Hero = () => {
  return (
    <Box
      component={motion.section}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      sx={{
        minHeight: "200vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        px: 8,
        backgroundImage: `url(${ArnabhaImg})`, // put image in public/
        backgroundSize: "cover", // fills screen nicely
        backgroundRepeat: "no-repeat",
      }}
    >
      <Typography variant="h3" fontWeight="bold">
        Hi, I'm <span style={{ color: "#1976d2" }}>Arnabha Manandhar</span>
      </Typography>

      <Typography variant="h5" mt={2}>
        Full Stack Developer
      </Typography>

      <Typography mt={3} maxWidth={600} color="text.secondary">
        I build scalable web applications using Scala, React, Node.js, MongoDB,
        PostgreSQL, and Spring Boot.
      </Typography>

      <Button
        component={motion.a}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        variant="contained"
        sx={{ mt: 4, width: "fit-content" }}
        href="#projects"
      >
        View Projects
      </Button>
    </Box>
  );
};

export default Hero;
