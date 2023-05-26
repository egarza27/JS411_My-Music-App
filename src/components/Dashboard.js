import React, { useState, useEffect } from "react";
import {
  Switch,
  Card,
  CardContent,
  Typography,
  Slider,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  AppBar,
  Grid,
  Container,
} from "@mui/material";

function Dashboard() {
  const [online, setOnline] = useState(false);
  const [volume, setVolume] = useState(20);
  const [quality, setQuality] = useState(1);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const notificationArr = [];

    if (!online) {
      notificationArr.push(
        "Your application is offline. You won't be able to share or stream music to other devices."
      );
    }

    if (volume > 80) {
      notificationArr.push(
        "Listening to music at a high volume could cause long-term hearing loss."
      );
    }

    if (quality === 1) {
      notificationArr.push(
        "Music quality is degraded. Increase quality if your connection allows it."
      );
    }
    setNotifications(notificationArr);
  }, [online, volume, quality]);

  const handleClickOnline = () => {
    setOnline(!online);
  };

  const handleVolume = (e, updatedVolume) => {
    setVolume(updatedVolume);
  };

  const soundQuality = (e) => {
    setQuality(e.target.value);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ height: "70px", padding: "20px" }} position="static">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Music App
          </Typography>
        </AppBar>
      </Box>
      <Typography
        variant="h4"
        sx={{
          color: "GrayText",
          marginTop: "20px",
          marginBottom: "30px",
          marginLeft: "300px",
          fontWeight: "bold",
        }}
      >
        Welcome User!
      </Typography>

      <br />
      <Container maxWidth="md">
        <Grid container spacing={10} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: "80%", width: "100%", padding: "10px" }}>
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  Online Mode
                </Typography>
                <br />
                <Typography variant="body1" color="text.secondary">
                  Is this application connected to the internet?
                </Typography>
              </CardContent>
              <Switch checked={online} onChange={handleClickOnline} />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: "80%", width: "100%", padding: "10px" }}>
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  Master Volume
                </Typography>
                <br />
                <Typography variant="body1" color="text.secondary">
                  Overrides all other sound settings in this application
                </Typography>
              </CardContent>
              <Slider
                aria-label="Temperature"
                defaultValue={30}
                valueLabelDisplay="auto"
                step={10}
                min={0}
                max={100}
                onChange={handleVolume}
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: "80%", width: "100%", padding: "10px" }}>
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  Sound Quality
                </Typography>
                <br />
                <Typography variant="body1" color="text.secondary">
                  Manually control the music quality in the event of poor
                  connection
                </Typography>
                <br />
                <FormControl sx={{ width: "100%" }}>
                  <InputLabel id="demo-simple-select-label">
                    Sound Quality
                  </InputLabel>
                  <Select
                    sx={{ border: "none" }}
                    value={quality}
                    label="Quality"
                    onChange={soundQuality}
                  >
                    <MenuItem value={1}>Low</MenuItem>
                    <MenuItem value={2}>Normal</MenuItem>
                    <MenuItem value={3}>High</MenuItem>
                  </Select>
                </FormControl>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <br />
      <br />
      <br />
      <Container maxWidth="md">
        <Typography variant="h6">System Notifications:</Typography>
        {notifications.length > 0 ? (
          <ul>
            {notifications.map((notification, index) => (
              <li key={index}>{notification}</li>
            ))}
          </ul>
        ) : (
          <Typography
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
          ></Typography>
        )}
      </Container>
    </div>
  );
}

export default Dashboard;
