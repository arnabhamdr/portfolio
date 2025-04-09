import React, { useState } from "react";
import {
  Drawer,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
  Box,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => setOpen(!open);
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <Box>
      <IconButton
        onClick={toggleDrawer}
        sx={{
          position: "fixed",
          top: 20,
          left: 20,
          zIndex: 1300,
          bgcolor: "primary.main",
          color: "white",
          "&:hover": {
            bgcolor: "primary.dark",
          },
        }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            width: 280,
            height: "100vh",
            bgcolor: "rgba(30, 60, 114, 0.95)",
            backdropFilter: "blur(12px)",
            color: "white",
            padding: "50px",
          },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              paddingBottom: "10px",
              borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
            }}
          >
            My Portfolio
          </Typography>
          <List sx={{ mt: 2 }}>
            {[
              { text: "Home", icon: <HomeIcon /> },
              { text: "About", icon: <PersonIcon /> },
              { text: "Projects", icon: <WorkIcon /> },
              { text: "Contact", icon: <ContactMailIcon /> },
            ].map((item, index) => (
              <ListItem
                button
                key={index}
                onClick={() => {
                  navigateTo(item.text.toLowerCase());
                }}
                sx={{
                  borderRadius: "8px",
                  transition: "0.3s",
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.2)",
                  },
                }}
              >
                <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} sx={{ color: "white" }} />
              </ListItem>
            ))}
          </List>

          <Box sx={{ flexGrow: 1, mt: "auto", p: 2, textAlign: "center" }}>
            <Button
              variant="contained"
              onClick={() => navigateTo("/")}
              sx={{
                width: "100%",
                bgcolor: "white",
                color: "primary.main",
                fontWeight: "bold",
                "&:hover": {
                  bgcolor: "primary.light",
                },
              }}
            >
              Go to Home
            </Button>
          </Box>
          <Divider sx={{ bgcolor: "rgba(255, 255, 255, 0.3)" }} />
        </Box>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
