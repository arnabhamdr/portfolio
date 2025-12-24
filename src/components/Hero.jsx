import { Box, Typography, Button, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import profile from "../assets/image/photo.jpg";

const Hero = () => {
  return (
    <Box
      component={motion.section}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        px: { xs: 3, md: 8 },
        gap: 5,
      }}
    >
      <Box flex={1}>
        <Typography variant="h3" fontWeight="bold">
          Hi, I'm <span style={{ color: "#1976d2" }}>Arnabha</span>
        </Typography>
        <Typography variant="h5" mt={2}>
          Full Stack Developer
        </Typography>
        <Typography mt={3} color="text.secondary">
          Scala • React • Node.js • PostgreSQL
        </Typography>

        <Button variant="contained" sx={{ mt: 4 }} href="#projects">
          View Projects
        </Button>
      </Box>

      <Avatar src={profile} sx={{ width: 220, height: 220 }} />
    </Box>
  );
};

export default Hero;
