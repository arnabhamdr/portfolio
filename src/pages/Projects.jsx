import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Grid,
} from "@mui/material";
import Sidebar from "../components/Sidebar/Sidebar";
import HrdcAdminImg from "../image/hrdc-admin.png";
import ArnabhaImage from "../image/Arnabha.jpg";
import DesignerImg from "../image/wisemdLogo.png";

const projects = [
  {
    title: "Hrdc Admin",
    image: HrdcAdminImg,
    description:
      "A full-stack admin platform for Hrdc hospital with React, MUI, Scala, Firebase",
    techStack: "React, Firebase, Scala, Material-UI",
    liveDemo: "https://admin.hrdc.wiseyak.com",
  },
  {
    title: "Portfolio Website",
    image: ArnabhaImage,
    description: "My personal portfolio website showcasing my work and skills.",
    techStack: "React, Material-UI",
    liveDemo: "https://arnabha.dev",
  },
  {
    title: "Designer Page",
    image: DesignerImg,
    description: "Designer for Hostpitals.",
    techStack: "React, MUI, Scala, Firebase",
    liveDemo: "https://designer.wiseyak.com/",
  },
];

const Projects = () => {
  return (
    <Box sx={{ minHeight: "100vh", textAlign: "center", padding: "40px" }}>
      <Sidebar />
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
        My Projects
      </Typography>
      <Typography variant="body1" sx={{ color: "white", mb: 4 }}>
        Here are some of the projects I've worked on. I love building
        **scalable, responsive web apps** using modern technologies.
      </Typography>

      {/* Project Cards Grid */}
      <Grid container spacing={3} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="300"
                image={project.image}
                alt={project.title}
                sx={{
                  objectFit: "cover",
                  width: "100%",
                }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mt: 1 }}
                >
                  {project.description}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ display: "block", mt: 1, fontStyle: "italic" }}
                >
                  Tech: {project.techStack}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    href={project.liveDemo}
                    target="_blank"
                    sx={{ mr: 1 }}
                  >
                    Live Demo
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Call to Action */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Want to see more?
        </Typography>
        <Typography variant="body2" sx={{ color: "white", mt: 1 }}>
          Visit my GitHub for more exciting projects!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          href="https://github.com/arnabha-mdr"
          target="_blank"
        >
          Visit GitHub
        </Button>
      </Box>
    </Box>
  );
};

export default Projects;
