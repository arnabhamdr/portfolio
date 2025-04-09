import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { Typography, Box } from "@mui/material";

function TimelineSection() {
  const events = [
    { year: "2024", description: "Worked on HRDC Admin & Appointment App." },
    { year: "2023", description: "Internship & New Job at WiseYak." },
    { year: "2022", description: "Graduated from University." },
    { year: "2018", description: "Joined University." },
    { year: "2016", description: "Joined High School." },
  ];

  return (
    <Box mt={4}>
      <Typography variant="h5" textAlign="center" mb={3}>
        My Journey
      </Typography>
      <Timeline position="alternate">
        {events.map((event, index) => (
          <TimelineItem key={index} sx={{ mb: 4 }}>
            {" "}
            <TimelineSeparator>
              <TimelineDot color="primary" />
              {index !== events.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent sx={{ minHeight: "80px" }}>
              {" "}
              <Typography variant="h6">{event.year}</Typography>
              <Typography>{event.description}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
}

export default TimelineSection;
