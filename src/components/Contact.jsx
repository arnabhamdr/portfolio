import { Box, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const contacts = [
  {
    label: "Email",
    value: "arnabha265@gmail.com",
    icon: <EmailIcon color="primary" />,
  },
  {
    label: "GitHub",
    value: "github.com/arnabhamdr",
    icon: <GitHubIcon color="primary" />,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/arnabha-manandhar",
    icon: <LinkedInIcon color="primary" />,
  },
];

const Contact = () => {
  return (
    <Box
      id="contact"
      sx={{ px: 8, py: 10 }}
      component={motion.section}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Typography variant="h4" mb={4}>
        Contact
      </Typography>

      <Grid container spacing={3}>
        {contacts.map((item, index) => (
          <Grid item xs={12} md={4} key={item.label}>
            <Paper
              component={motion.div}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              elevation={3}
              sx={{
                p: 3,
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
              whileHover={{ scale: 1.1 }}
            >
              {item.icon}
              <Box>
                <Typography variant="subtitle1" fontWeight="bold">
                  {item.label}
                </Typography>
                <Typography color="text.secondary">{item.value}</Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Contact;
