import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
  Fade,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import { NavLink } from 'react-router-dom';

export default function TopBarNavigationComponent() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Services', href: '/services' },
    { text: 'Gallery', href: '/gallery' },
    { text: 'Login', href: '/login' },
  ];

  const handleMenuClick = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false); // Close menu on item click
  };

  return (
    <Box sx={{ width: '100%', height: '70px', position: 'relative' }}>
      <AppBar position="absolute" sx={{ height: '64px' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', height: '100%' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <BakeryDiningIcon />
            <Typography variant="h6" sx={{ ml: 1 }}>
              Sangita Software
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, height: '100%' }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                component={NavLink}
                to={item.href}
                color="inherit"
                sx={{ 
                  height: '100%', 
                  textAlign: 'center',
                  transition: 'background-color 0.3s',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>

          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuClick}
            sx={{ display: { xs: 'block', md: 'none' } }} // Show only on mobile
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Fade in={menuOpen}>
        <Box 
          sx={{
            position: 'absolute',
            top: '64px', // Adjust for AppBar height
            right: 0,
            width: '500px', // Width of the menu box
            backgroundColor: 'white',
            boxShadow: 3,
            padding: 2,
            zIndex: 10,
            textAlign: 'center' // Center text alignment for the box
          }}
        >
          {menuItems.map((item) => (
            <Button 
              key={item.text} 
              component={NavLink} 
              to={item.href} 
              color="inherit" 
              onClick={handleMenuItemClick} // Close menu on item click
              sx={{ 
                display: 'block', 
                width: '100%', 
                textAlign: 'center', // Center text alignment for each button
                mb: 1,
                transition: 'background-color 0.3s',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              {item.text}
            </Button>
          ))}
        </Box>
      </Fade>
    </Box>
  );
}
