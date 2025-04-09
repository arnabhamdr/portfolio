import React from "react";
import { Box, Typography, Avatar, Divider } from "@mui/material";
import ArnabhaImage from "../image/Arnabha.jpg";
import Sidebar from "../components/Sidebar/Sidebar";

const About = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <Sidebar />
      <Avatar
        src={ArnabhaImage}
        sx={{
          width: 140,
          height: 140,
          marginBottom: 2,
          boxShadow: 3,
        }}
      />

      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 2 }}>
        About Me
      </Typography>
      <Divider
        sx={{ width: "60px", margin: "10px auto", bgcolor: "primary.main" }}
      />

      <Typography
        variant="body1"
        sx={{
          mt: 2,
          color: "white",
          fontSize: "1.1rem",
          maxWidth: "700px",
        }}
      >
        Hi, I'm **Arnabha**, a passionate **Web Developer** with a strong
        background in **React, JavaScript, and Material-UI**. I specialize in
        building modern, responsive web applications with a focus on clean UI/UX
        and optimal performance. Coding isn't just my job—it's my passion! I
        love turning ideas into functional, beautiful, and efficient digital
        experiences.
      </Typography>

      <Box sx={{ mt: 4, maxWidth: "700px" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Skills & Technologies
        </Typography>
        <Divider
          sx={{ width: "50px", margin: "10px auto", bgcolor: "primary.main" }}
        />

        <Typography variant="body2" sx={{ color: "white", mt: 2 }}>
          <strong>💻 Frontend:</strong> React.js, JavaScript (ES6+), HTML5,
          CSS3, Material-UI
          <br />
          <strong>🛠 Backend:</strong> Scala, PostgreSql
          <br />
          <strong>📦 Tools & DevOps:</strong> Git, GitHub Postman
        </Typography>
      </Box>

      <Box sx={{ mt: 4, maxWidth: "700px" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Work Experience & Projects
        </Typography>
        <Divider
          sx={{ width: "50px", margin: "10px auto", bgcolor: "primary.main" }}
        />

        <Typography variant="body2" sx={{ color: "white", mt: 2 }}>
          <strong>🔹 Web Developer</strong> (2022 - Present) Worked with clients
          worldwide to build modern, scalable web applications.
          <br />
          <strong>🔹 Health Sector Web developer</strong> - Developed a
          full-stack health sector website with React, Firebase authentication,
          and Stripe payments.
          <br />
          <strong>🔹 Portfolio Website</strong> - Built a clean, responsive
          portfolio showcasing my work and skills.
        </Typography>
      </Box>

      <Box sx={{ mt: 4, maxWidth: "700px" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Beyond Coding: My Interests
        </Typography>
        <Divider
          sx={{ width: "50px", margin: "10px auto", bgcolor: "primary.main" }}
        />

        <Typography variant="body2" sx={{ color: "white", mt: 2 }}>
          When I'm not coding, I love exploring new technologies, reading tech
          blogs, and contributing to open-source projects.
          <br />
          Outside of tech, I enjoy **traveling**, **photography**, **playing
          chess**, and **listening to music**.
        </Typography>
      </Box>

      {/* Contact / Call to Action */}
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Let's Connect!
        </Typography>
        <Divider
          sx={{ width: "50px", margin: "10px auto", bgcolor: "primary.main" }}
        />

        <Typography variant="body2" sx={{ color: "white", mt: 1 }}>
          Feel free to reach out for collaborations, projects, or just a
          friendly chat!
        </Typography>
        <Typography variant="body2" sx={{ color: "white", mt: 1 }}>
          ✉ Email: arnabha265@gmail.com
          <br />
          📞 Phone: +977 9840068015
          <br />
          🔗 LinkedIn: linkedin.com/in/arnabha-manandhar-5b5470261/
          <br />
          🔗 GitHub: github.com/arnabhamdr
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
