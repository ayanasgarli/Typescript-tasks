import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container maxWidth="sm" style={{ textAlign: "center", marginTop: "100px" }}>
      <Typography variant="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h4" gutterBottom>
        Oops! Page not found.
      </Typography>
      <Typography variant="body1" gutterBottom>
        The page you are looking for might have been removed or is temporarily unavailable.
      </Typography>
      <Button variant="contained" component={Link} to="/" style={{ marginTop: "20px", backgroundColor:"#e90606" }}>
        Go to Home
      </Button>
    </Container>
  );
};

export default NotFound;
