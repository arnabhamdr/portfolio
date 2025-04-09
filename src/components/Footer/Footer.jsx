import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email"; // Import Email Icon

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        py: 2,
        textAlign: "center",
        bgcolor: "primary.main",
        color: "white",
        width: "100%",
        position: "relative",
        left: 0,
      }}
    >
      <Box>
        <IconButton
          href="https://github.com/yourprofile"
          target="_blank"
          sx={{ color: "white" }}
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          sx={{ color: "white" }}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          href="mailto:your.email@example.com"
          sx={{ color: "white" }}
        >
          <EmailIcon />
        </IconButton>
      </Box>

      <Typography variant="body2" sx={{ mt: 1 }}>
        © {new Date().getFullYear()} Arnabha Manandhar. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
