import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import { Link } from 'react-router-dom';

const UserNavbar: React.FC = () => {
  return (
    <>
      <AppBar
        position="static"
        style={{ backgroundColor: "white", color: "#e90606" }}
      >
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </div>
          <div>
            <Typography variant="h6" sx={{  fontSize: '36px', fontFamily: 'Georgia, Times, serif', marginLeft: '160px' }} >
              TIME
            </Typography>
          </div>
          <div>
            <Button color="inherit" sx={{fontWeight: '600', fontSize: '17px'}} component={Link} to="/login">Sign In</Button>
            <Button
              variant="contained"
              sx={{ bgcolor: "#e90606", color: "white", marginLeft: '15px', fontWeight: '600',  }}
            >
              Subscribe
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }} />
    </>
  );
};

export default UserNavbar;
