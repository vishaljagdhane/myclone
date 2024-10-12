import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Box, Fade } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import { NavLink } from 'react-router-dom';

export default function TopBarNavigationComponent() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Services', path: '/services' },
    { text: 'Login', path: '/login' },
  ];

  const handleMenuClick = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <Box sx={{ width: '100%', position: 'relative' }}>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <BakeryDiningIcon />
            <Typography variant="h6" sx={{ ml: 1 }}>
              Sangita Software
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                component={NavLink}
                to={item.path}
                color="inherit"
                sx={{
                  textAlign: 'center',
                  transition: 'background-color 0.3s',
                  '&.active': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  },
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
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Menu */}
      <Fade in={menuOpen}>
        <Box
          sx={{
            position: 'absolute',
            top: '64px',
            right: 0,
            width: '250px',
            backgroundColor: 'white',
            boxShadow: 3,
            padding: 2,
            zIndex: 10,
          }}
        >
          {menuItems.map((item) => (
            <Button
              key={item.text}
              component={NavLink}
              to={item.path}
              color="inherit"
              sx={{
                display: 'block',
                width: '100%',
                textAlign: 'center',
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
