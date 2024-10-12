import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        background: 'linear-gradient(to right, #4A90E2, #50E3C2)',
        color: '#fff',
        padding: { xs: 2, sm: 4 }, // Responsive padding
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h2" sx={{ marginBottom: 2, textAlign: 'center' }}>
          Welcome to Sangita Software
        </Typography>
        <Typography variant="h5" sx={{ marginBottom: 4, textAlign: 'center' }}>
          Your one-stop solution for all software needs
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Get Started
        </Button>
      </motion.div>

      <Grid container spacing={2} sx={{ marginTop: 5, width: '100%', maxWidth: '1200px' }}>
        {['Innovation', 'Integration', 'Software'].map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={item}>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }} // Delay for staggered effect
            >
              <Box
                sx={{
                  background: 'sky', // Set background to black
                  borderRadius: 2,
                  padding: 2,
                  boxShadow: 3,
                  textAlign: 'center',
                  color: 'white', // Text color set to white for contrast
                }}
              >
                <Typography variant="h6">{item}</Typography>
                <Typography>
                  {item === 'Innovation'
                    ? 'We foster innovation by integrating the latest technologies into our solutions.'
                    : item === 'Integration'
                    ? 'Our solutions seamlessly integrate with existing systems, ensuring smooth operations.'
                    : 'We provide custom software solutions tailored to your unique business needs.'}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomePage;
