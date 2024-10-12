import React from 'react';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import TopBarNavigationComponent from './TopBarNagivationComponent';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ServicesPage from './ServicesPage';
import LoginPage from './LoginPage';

const NavigationPage = () => {
  const location = useLocation();

  const renderPage = () => {
    switch (location.pathname) {
      case '/':
        return <HomePage />;
      case '/about':
        return <AboutPage />;
      case '/services':
        return <ServicesPage />;
      case '/login':
        return <LoginPage />;
      default:
        return <HomePage />; // default page is Home
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        backgroundColor: '#e0f7fa',
      }}
    >
      {/* TopBarNavigationComponent will always be visible */}
      <TopBarNavigationComponent />

      <Box
        sx={{
          width: '100%',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
        <motion.div
          key={location.key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          style={{ padding: '16px' }}
        >

          {/* Render the appropriate page based on the route */}
          {renderPage()}

     
          <AboutPage/>
          <ServicesPage/>
          <LoginPage/>
        </motion.div>
      </Box>
    </Box>
  );
};

export default NavigationPage;
