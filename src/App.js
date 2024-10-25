// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // Import the theme
import Home from './home';
import MyResume from './my-resume';
import AllNumbers from './all-numbers';
import NotFound from './not-found';
import Login from './login';
import Navigation from './navigation';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user] = useState({ name: "John Doe", phoneNumber: "19495221879" });

  const login = () => {
    setIsAuthenticated(true);
    // Set user details after successful login, e.g., from API
  };
  
  const logout = () => {
    setIsAuthenticated(false);
    // Clear user details or handle logout logic here
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navigation isAuthenticated={isAuthenticated} logout={logout} user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/my-resume" 
            element={isAuthenticated ? <MyResume /> : <Navigate to="/" />} 
          />
          <Route 
            path="/allnumbers/:phoneNumber" 
            element={<AllNumbers />} 
          />
          <Route path="/login" element={<Login login={login} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
