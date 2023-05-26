import "./App.css";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Input,
  Grid,
} from "@mui/material";
import React, { useState } from "react";
import Dashboard from "./components/Dashboard";

function MusicApp() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return loggedIn ? (
    <Dashboard />
  ) : (
    <div>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              My Music App
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {/* the xs props specify that the the item should span accross 12 columns on extra-smalls screens, 6 columns on small screens and 4 columns on medium screens */}
          <Grid sx={{ marginTop: "90px" }} item xs={12} sm={6} md={4}>
            <Input
              placeholder="Username"
              fullWidth
              sx={{ borderBottom: "1px solid gray" }}
            />
            <Input
              placeholder="Password"
              fullWidth
              sx={{ borderBottom: "1px solid gray" }}
            />
            <Button
              sx={{ marginTop: "30px" }}
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleLogin}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default MusicApp;
