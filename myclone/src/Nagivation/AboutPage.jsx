import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const cloneApplications = [
    {
      title: 'SAP Clone',
      description: 'A powerful enterprise resource planning software to manage business operations.',
    },
    {
      title: 'Facebook Clone',
      description: 'A social networking platform that connects people and allows sharing of content.',
    },
    {
      title: 'Gmail Clone',
      description: 'An email service that provides a user-friendly interface and robust features.',
    },
    {
      title: 'Flickr Clone',
      description: 'An image and video hosting service that allows users to share and embed photos.',
    },
    {
      title: 'Tally Clone',
      description: 'An accounting software used for business management and financial reporting.',
    },
    {
      title: 'YouTube Clone',
      description: 'A video-sharing platform for users to upload, view, and share videos.',
    },
  ];

  return (
    <Box
      sx={{
        padding: { xs: 2, sm: 4 },
        background: 'linear-gradient(to right, #f0f0f0, #ffffff)',
        color: '#333',
        height: '100vh', // Full height for scrolling effect
        overflowY: 'auto', // Allow vertical scrolling
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          About Our Clones
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4 }}>
          We create clones of popular applications to provide similar functionality and enhance user experience.
        </Typography>
      </motion.div>
      <Grid container spacing={3} justifyContent="center">
        {cloneApplications.map((app, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Box
                sx={{
                  background: '#fff',
                  borderRadius: 2,
                  padding: 3,
                  boxShadow: 2,
                  textAlign: 'center',
                }}
              >
                <Typography variant="h6">{app.title}</Typography>
                <Typography>{app.description}</Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AboutPage;
