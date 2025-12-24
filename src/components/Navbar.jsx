import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
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
        <div>
          {["About", "Work Experience", "Skills", "Projects", "Contact"].map(
            (item) => (
              <Button key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </Button>
            ),
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
