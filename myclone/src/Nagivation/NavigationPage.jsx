import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TopBarNavigationComponent from './TopBarNagivationComponent';


const NavigationPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <TopBarNavigationComponent/>
  <h1>Home</h1>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/services" element={<h1>Services</h1>} />
          <Route path="/gallery" element={<h1>Gallery</h1>} />
          <Route path="/login" element={<h1>Login</h1>} />
        </Routes>

    </div>
  );
};

export default NavigationPage;
