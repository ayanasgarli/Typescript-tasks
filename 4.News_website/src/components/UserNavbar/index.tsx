import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import axios from "axios";

const UserNavbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [weather, setWeather] = useState<any>(null);

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather?q=Baku&appid=8eefb0be4b84e7fbe707057f06ef5523&units=metric"
        ); 
        setWeather(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <>
      <AppBar
        position="static"
        style={{ backgroundColor: "white", color: "#e90606" }}
      >
        <Toolbar>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={2} sm={2} md={2}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={isDrawerOpen}
                onClose={toggleDrawer(false)}
              >
                <List style={{ width: "250px", padding: "25px" }}>
                  <h2>Sections</h2>
                  <ListItem
                    button
                    component={Link}
                    to="/"
                    sx={{
                      "&:hover": {
                        "& .MuiListItemText-root": {
                          color: "#e90606"
                        },
                      },
                    }}
                  >
                    <ListItemText primary="Home" />
                  </ListItem>
                  <ListItem
                    button
                    component={Link}
                    to="/publishers"
                    sx={{
                      "&:hover": {
                        "& .MuiListItemText-root": {
                          color: "#e90606",
                        },
                      },
                    }}
                  >
                    <ListItemText primary="Publishers" />
                  </ListItem>
                </List>
              </Drawer>
            </Grid>
            <Grid item xs={8} sm={8} md={8} sx={{ textAlign: "center" }}>
              <Typography
                component={Link}
                to="/"
                variant="h6"
                sx={{
                  textDecoration: "none",
                  color: "#e90606",
                  fontSize: "36px",
                  fontFamily: "Georgia, Times, serif",
                }}
              >
                TIME
              </Typography>
            </Grid>
            <Grid item xs={2} sm={2} md={2} sx={{ textAlign: "right" }}>
              <Button
                color="inherit"
                sx={{ fontWeight: "600", fontSize: "17px" }}
                component={Link}
                to="/login"
              >
                Sign In
              </Button>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#e90606",
                  color: "white",
                  marginLeft: "15px",
                  fontWeight: "600",
                }}
              >
                Subscribe
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }} />
      {weather && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Typography variant="subtitle1">
            Baku: {weather.weather[0].description}
          </Typography>
          <Typography variant="subtitle1">
            Temperature: {weather.main.temp}°C
          </Typography>
        </div>
      )}
    </>
  );
};
export default UserNavbar;
