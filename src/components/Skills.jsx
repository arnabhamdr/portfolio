import { Box, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

const skills = [
  "Scala",
  "Java / Spring Boot",
  "React",
  "Node.js",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "Git & GitHub",
];

const Skills = () => {
  return (
    <Box id="skills" sx={{ px: 8, py: 10 }}>
      <Typography variant="h4" mb={4}>
        Skills
      </Typography>

      <Grid container spacing={3}>
        {skills.map((skill, index) => (
          <Grid item xs={6} md={3} key={skill}>
            <Paper
              component={motion.div}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              sx={{ p: 2, textAlign: "center" }}
              elevation={3}
              whileHover={{ scale: 1.2 }}
            >
              {skill}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
