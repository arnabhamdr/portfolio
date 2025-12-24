import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <Box
      id="experience"
      component={motion.section}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      sx={{ px: { xs: 3, md: 8 }, py: 10 }}
      whileHover={{ scale: 1.1 }}
    >
      <Typography variant="h4" mb={4}>
        Work Experience
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6">
                Full Stack Developer — Wiseyak
              </Typography>

              <Typography color="text.secondary" mb={2}>
                Scala • Node.js • React.js
              </Typography>

              <Typography>
                • Developed full-stack applications using Scala and React
                <br />
                • Built REST APIs using Node.js
                <br />
                • Worked with PostgreSQL and MongoDB
                <br />• Collaborated with designers and backend teams
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Experience;
