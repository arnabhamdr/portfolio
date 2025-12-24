import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";

const projects = [
  {
    title: "HRDC Admin Portal",
    techStack: "React Js + Node Js + PostgreSQL.",
  },
  {
    title: "Appointment Booking System",
    techStack: "React Js + Scala + PostgreSQL",
  },
  {
    title: "Hospital Inventory Management System",
    techStack: "React Js + Scala + PostgreSQL",
  },
  {
    title: "Designer Page",
    techStack: "React Js + Scala + PostgreSQL",
  },
  {
    title: "PayPal Integration",
    techStack: "React Js + Node Js + MongoDB",
  },
];

const Projects = () => {
  return (
    <Box id="projects" sx={{ px: 8, py: 10 }}>
      <Typography variant="h4" mb={4}>
        Projects
      </Typography>

      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item xs={12} md={4} key={project.title}>
            <Card
              component={motion.div}
              whileHover={{ scale: 1.08 }}
              elevation={3}
            >
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>
                <Typography mt={1} color="text.secondary">
                  {project.techStack}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
