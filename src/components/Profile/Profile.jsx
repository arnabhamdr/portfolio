import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import "../../App.css";
import ArnabhaImage from "../../image/Arnabha.jpg";

function Profile() {
  return (
    <Box textAlign="center" mt={4}>
      <Avatar
        src={ArnabhaImage}
        sx={{ width: 120, height: 120, margin: "auto" }}
      />
      <Typography variant="h4" mt={2}>
        Arnabha Manandhar
      </Typography>
      <Typography variant="h6" color="info">
        Full Stack Developer | React | MUI | Scala | NodeJs | ExpressJs
      </Typography>
    </Box>
  );
}

export default Profile;
