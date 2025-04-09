import React from "react";
import { Box, Typography, TextField, Button, Paper } from "@mui/material";
import Sidebar from "../components/Sidebar/Sidebar";
const Contact = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <Sidebar />
      <Paper
        elevation={3}
        sx={{
          padding: "30px",
          borderRadius: "10px",
          maxWidth: "500px",
          width: "100%",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
          Contact Me
        </Typography>

        <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
          Have a question or want to work together? Fill out the form below!
        </Typography>

        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <TextField
            label="Arnabha Manandhar"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            label="arnabha265@gmail.com"
            variant="outlined"
            fullWidth
            required
            type="email"
          />
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            required
            multiline
            rows={4}
          />
          <Button variant="contained" color="primary" size="large">
            Send Message
          </Button>
        </Box>
      </Paper>

      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Or reach me directly:
        </Typography>
        <Typography variant="body2" sx={{ color: "white", mt: 1 }}>
          ✉ Email: arnabha265@gmail.com
        </Typography>
        <Typography variant="body2" sx={{ color: "white" }}>
          📞 Phone: +977 9840068015
        </Typography>
      </Box>
    </Box>
  );
};

export default Contact;
