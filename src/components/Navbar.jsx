import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
import { useState } from "react";

const navItems = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar
        position="fixed"
        color="default"
        elevation={1}
        component={motion.div}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6">Arnabha</Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navItems.map((item) => (
              <Button key={item.id} href={`#${item.id}`}>
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu */}
          <IconButton
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 220 }}>
          {navItems.map((item) => (
            <ListItem
              button
              key={item.id}
              component="a"
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
