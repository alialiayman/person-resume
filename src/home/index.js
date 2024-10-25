import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  Container,
} from "@mui/material";
import { auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import welcomeBg from '../assets/images/welcome-bg.webp'

const theme = createTheme({
  palette: {
    primary: {
      main: "#4CAF50", // A professional green
    },
    secondary: {
      main: "#607D8B", // Neutral color for contrast
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

const handleSignUp = async () => {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
    alert("Successfully signed up!");
  } catch (error) {
    alert("Error signing up: " + error.message);
  }
};

const handleLogin = async () => {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
    alert("Successfully logged in!");
  } catch (error) {
    alert("Error logging in: " + error.message);
  }
};

const HomePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundColor: "#f4f4f4",
          minHeight: "100vh",
          padding: "2rem 0",
        }}
      >
        <Container
          maxWidth="md"
          sx={{ textAlign: "center", marginTop: "3rem" }}
        >
          <Typography variant="h3" color="primary" gutterBottom>
            Welcome to Person Resume
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            Build and publish your resume with a unique link. Sign up to get
            started, customize your professional details, and let others find
            you easily.
          </Typography>

          {/* Sign Up and Login Card */}
          <Card sx={{ maxWidth: 500, margin: "2rem auto" }}>
            <CardMedia
              component="img"
              height="200"
              image={welcomeBg} // Update with your image path
              alt="Person Resume Welcome"
            />
            <CardContent>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSignUp}
                fullWidth
                sx={{ marginBottom: "1rem" }}
              >
                Sign Up
              </Button>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleLogin}
                fullWidth
              >
                Log In
              </Button>
            </CardContent>
          </Card>

          {/* Explanation Card */}
          <Card
            sx={{
              maxWidth: "100%",
              marginTop: "3rem",
              padding: "2rem",
              backgroundColor: "#FFFFFF",
            }}
          >
            <CardContent>
              <Typography variant="h4" color="secondary" gutterBottom>
                What is Person Resume?
              </Typography>
              <Typography variant="body1" paragraph>
                **Person Resume** allows you to create a personalized online
                resume with a unique URL based on your phone number, like
                `person-resume.web.app/1234567890`. This quick and easy solution
                is ideal for professionals seeking an editable, web-accessible
                resume.
              </Typography>
              <Typography variant="body1" paragraph>
                - **Create an Account**: Begin by signing up with your details.
              </Typography>
              <Typography variant="body1" paragraph>
                - **Build Your Resume**: Input your personal information,
                professional experience, and any other relevant data.
              </Typography>
              <Typography variant="body1" paragraph>
                - **Publish Your Resume**: The unique URL will be generated with
                your phone number to make it easily shareable.
              </Typography>
              <Typography variant="body1" paragraph>
                - **Customization for Developers**: If you're a developer, feel
                free to clone this project, create a Firebase account, and host
                your own version. With your custom domain, you can allow others
                to create their resumes on your hosted platform.
              </Typography>
              <Typography variant="body1" paragraph>
                As a React developer traveling as a digital nomad, I’ve crafted
                this tool to help professionals establish an accessible online
                presence quickly and reliably.
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default HomePage;
