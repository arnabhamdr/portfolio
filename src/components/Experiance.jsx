import { Box, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <Box
      id="work experience"
      sx={{ px: 8, py: 10 }}
      component={motion.section}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Typography variant="h4" mb={4}>
        Work Experience
      </Typography>

      <Paper
        component={motion.div}
        elevation={3}
        whileHover={{ scale: 1.02 }}
        sx={{ p: 4 }}
      >
        <Typography variant="h6">Full Stack Developer — Wiseyak</Typography>

        <Typography color="text.secondary" mb={2}>
          Scala · Node.js · React.js
        </Typography>

        <Typography color="text.secondary" lineHeight={1.8}>
          • Developed and maintained full-stack applications using <b>Scala</b>,
          <b> Node.js</b>, and <b>React.js</b>.<br />
          • Built backend services with Scala and Node.js, integrating
          PostgreSQL and MongoDB.
          <br />
          • Implemented REST APIs and handled authentication and authorization.
          <br />
          • Created responsive UI components using React and MUI.
          <br />• Collaborated with team members to design scalable and
          maintainable systems.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Experience;
