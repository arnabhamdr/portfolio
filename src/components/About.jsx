import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Box
      id="about"
      component={motion.section}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      sx={{ px: 8, py: 10 }}
    >
      <Typography variant="h4" mb={3}>
        About Me
      </Typography>
      <Typography maxWidth={800} color="text.secondary" lineHeight={1.8}>
        I am a passionate full-stack developer with three years experience
        building hospital management systems, appointment booking platforms, and
        MERN stack applications. I enjoy clean architecture and problem-solving.
      </Typography>
    </Box>
  );
};

export default About;
