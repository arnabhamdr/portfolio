import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { NavLink } from "react-router"; // from react-router

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => setOpen(!open);

  const navItems = [
    { text: "Home", path: "/", icon: <HomeIcon /> },
    { text: "About", path: "/about", icon: <PersonIcon /> },
    { text: "Projects", path: "/projects", icon: <WorkIcon /> },
    { text: "Contact", path: "/contact", icon: <ContactMailIcon /> },
  ];

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
            {navItems.map((item) => (
              <NavLink
                to={item.path}
                style={({ isActive }) => ({
                  textDecoration: "none",
                  color: "white",
                  backgroundColor: isActive
                    ? "rgba(255,255,255,0.2)"
                    : "transparent",
                  borderRadius: "8px",
                  display: "block",
                })}
                onClick={toggleDrawer}
              >
                <ListItem button>
                  <ListItemIcon sx={{ color: "white" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              </NavLink>
            ))}
          </List>

          <Box sx={{ flexGrow: 1, mt: "auto", p: 2, textAlign: "center" }}>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
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
            </NavLink>
          </Box>

          <Divider sx={{ bgcolor: "rgba(255, 255, 255, 0.3)" }} />
        </Box>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
