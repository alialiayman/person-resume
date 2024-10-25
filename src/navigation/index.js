// components/Navigation.js
import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Avatar,
  Box,
  Stack,
} from "@mui/material";

const Navigation = ({ isAuthenticated, logout, user }) => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Person Resume
          </Typography>
          <Stack direction="row" alignItems={"center"}>
            <Link to="/" style={{ margin: "0 10px", color: "white" }}>
              Home
            </Link>
            {isAuthenticated ? (
              <>
                <Link
                  to="/my-resume"
                  style={{ margin: "0 10px", color: "white" }}
                >
                  My Resume
                </Link>
                <Link
                  to={`/${user.phoneNumber}`}
                  style={{ margin: "0 10px", color: "white" }}
                >
                  View My Resume
                </Link>
                <Box
                  display="flex"
                  alignItems="center"
                  style={{ marginLeft: "10px" }}
                >
                  <Avatar alt={user.name} src={user.avatarUrl} />
                  <Typography
                    variant="body1"
                    color="inherit"
                    style={{ marginLeft: "10px" }}
                  >
                    Welcome, {user.name}
                  </Typography>
                </Box>
                <Button
                  onClick={logout}
                  color="inherit"
                  style={{ marginLeft: "10px" }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <></>
            )}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;
