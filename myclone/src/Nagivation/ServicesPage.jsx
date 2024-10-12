import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Software Development',
    description: 'Custom software solutions tailored to meet your business needs.',
  },
  {
    title: 'Web Development',
    description: 'Responsive and user-friendly websites designed to enhance your online presence.',
  },
  {
    title: 'Automation',
    description: 'Streamline your processes with automation solutions for efficiency and productivity.',
  },
  {
    title: 'Service-Based Work',
    description: 'Providing various services to cater to your specific requirements and challenges.',
  },
  {
    title: 'Job Work',
    description: 'Outsource your projects to our skilled professionals for high-quality results.',
  },
  {
    title: 'Call Center Services',
    description: 'Professional call center solutions to enhance customer support and engagement.',
  },
];

const ServicesPage = () => {
  return (
    <Box
      sx={{
        padding: { xs: 2, sm: 4 },
        background: '#f5f5f5',
        color: '#333',
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Our Services
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4 }}>
        We offer a range of services to help your business thrive.
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
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
                <Typography variant="h6" gutterBottom>
                  {service.title}
                </Typography>
                <Typography>{service.description}</Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesPage;
