import {
  AccountBox,
  Build,
  Code,
  Image,
  Public,
  TravelExplore,
} from "@mui/icons-material"; // For placeholder icons
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid2,
  Typography,
} from "@mui/material";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import welcomeBg from "../assets/images/welcome-bg.webp";
import { auth } from "../firebase";
import theme from "../theme";

const HomePage = ({ login }) => {
  const handleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      login();
    } catch (error) {
      alert("Error signing up: " + error.message);
    }
  };

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      login();
    } catch (error) {
      alert("Error logging in: " + error.message);
    }
  };
  return (
    <Box
      sx={{
        backgroundColor: "#f4f4f4",
        minHeight: "100vh",
        padding: "2rem 0",
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center", marginTop: "3rem" }}>
        <Typography variant="h3" color="primary" gutterBottom>
          Welcome to Person Resume
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Build and publish your resume with a unique link. Sign up to get
          started, customize your professional details, and let others find you
          easily.
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
            <Grid2 container spacing={4}>
              <Grid2 item xs={12}>
                <Typography variant="h4" color="secondary" gutterBottom>
                  What is Person Resume?
                </Typography>
              </Grid2>

              <Grid2 item xs={12} sm={6}>
                <Image
                  sx={{ fontSize: 80, color: theme.palette.primary.main }}
                />
                <Typography variant="body1" component="p" gutterBottom>
                  <strong>Person Resume</strong> allows you to create a
                  personalized online resume with a unique URL based on your
                  phone number, like `person-resume.web.app/1234567890`.
                </Typography>
              </Grid2>

              <Grid2 item xs={12} sm={6}>
                <AccountBox
                  sx={{ fontSize: 80, color: theme.palette.secondary.main }}
                />
                <Typography variant="body1" component="p" gutterBottom>
                  <strong>Create an Account</strong>: Begin by signing up with
                  your details.
                </Typography>
              </Grid2>

              <Grid2 item xs={12} sm={6}>
                <Build
                  sx={{ fontSize: 80, color: theme.palette.primary.main }}
                />
                <Typography variant="body1" component="p" gutterBottom>
                  <strong>Build Your Resume</strong>: Input your personal
                  information, professional experience, and any other relevant
                  data.
                </Typography>
              </Grid2>

              <Grid2 item xs={12} sm={6}>
                <Public
                  sx={{ fontSize: 80, color: theme.palette.secondary.main }}
                />
                <Typography variant="body1" component="p" gutterBottom>
                  <strong>Publish Your Resume</strong>: The unique URL will be
                  generated with your phone number to make it easily shareable.
                </Typography>
              </Grid2>

              <Grid2 item xs={12}>
                <Typography variant="body1" component="p" gutterBottom>
                  As a React developer traveling as a digital nomad, I’ve
                  crafted this tool to help professionals establish an
                  accessible online presence quickly and reliably.
                </Typography>
              </Grid2>

              <Grid2 item xs={12}>
                <TravelExplore
                  sx={{ fontSize: 80, color: theme.palette.primary.main }}
                />
                <Typography variant="body1" component="p" gutterBottom>
                  <strong>About the Developer</strong>: This tool is built by a
                  developer passionate about creating accessible solutions.
                </Typography>
              </Grid2>

              <Grid2 item xs={12}>
                <Code
                  sx={{ fontSize: 80, color: theme.palette.secondary.main }}
                />
                <Typography variant="body1" component="p">
                  <strong>Customization for Developers</strong>: If you're a
                  developer, feel free to clone this project, create a Firebase
                  account, and host your own version.
                </Typography>
              </Grid2>
            </Grid2>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default HomePage;
