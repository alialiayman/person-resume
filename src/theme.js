// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // A shade of blue for primary actions
    },
    secondary: {
      main: '#dc004e', // A shade of pink for secondary actions
    },
    background: {
      default: '#f4f6f8', // A light background color
      paper: '#ffffff', // Paper-like background for cards, etc.
    },
    text: {
      primary: '#333333', // Primary text color
      secondary: '#666666', // Secondary text color
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    body1: {
      fontWeight: 400,
      fontSize: '1rem',
    },
  },
  shape: {
    borderRadius: 8, // Rounded corners
  },
});

export default theme;
