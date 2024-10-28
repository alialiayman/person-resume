// App.js
import { ThemeProvider } from '@mui/material/styles';
import React, { useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AllNumbers from './all-numbers';
import Home from './home';
import MyResume from './my-resume';
import Navigation from './navigation';
import NotFound from './not-found';
import theme from './theme';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user] = useState({ name: "John Doe", phoneNumber: "19495221879" });

  const handleLogin = () => {
    setIsAuthenticated(true);
  };
  
  const logout = () => {
    setIsAuthenticated(false);
  };

  // Check if the path contains a phone number (e.g., "/19495221879")
  const path = window.location.pathname;
  const isPhoneNumberPath = path.match(/^\/\d{10,15}$/); // Matches 10-15 digit numbers

  return (
    <ThemeProvider theme={theme}>
      <Router>
        {/* Conditionally render Navigation */}
        {isAuthenticated || !isPhoneNumberPath ? (
          <Navigation isAuthenticated={isAuthenticated} logout={logout} user={user} />
        ) : null}
        <Routes>
          <Route path="/" element={<Home login={handleLogin} />} />
          <Route 
            path="/my-resume" 
            element={isAuthenticated ? <MyResume /> : <Navigate to="/" />} 
          />
          <Route 
            path="/:phoneNumber" 
            element={<AllNumbers />} 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
