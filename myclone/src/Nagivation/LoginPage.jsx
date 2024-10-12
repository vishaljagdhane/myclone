import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Grid, Alert } from '@mui/material';
import { motion } from 'framer-motion';

const LoginPage = () => {
  const [emailOrMobile, setEmailOrMobile] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleLogin = () => {
    // Basic validation logic
    if (!emailOrMobile || !password) {
      setError('Both fields are required.');
      return;
    }
    // Example validation for email/mobile
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;
    if (!emailRegex.test(emailOrMobile) && !mobileRegex.test(emailOrMobile)) {
      setError('Please enter a valid email or mobile number.');
      return;
    }
    setError('');
    setSuccess(true);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: '#e0f7fa',
        padding: 2,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">Login successful!</Alert>}
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ width: '100%', maxWidth: 400 }}
      >
        <Grid container spacing={2} direction="column">
          <Grid item>
            <TextField
              label="Email or Mobile"
              variant="outlined"
              fullWidth
              value={emailOrMobile}
              onChange={(e) => setEmailOrMobile(e.target.value)}
              required
            />
          </Grid>
          <Grid item>
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={handleLogin} fullWidth>
              Login
            </Button>
          </Grid>
        </Grid>
      </motion.div>
    </Box>
  );
};

export default LoginPage;
