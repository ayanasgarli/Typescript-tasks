import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';


const UserFooter: React.FC = () => {
  return (
    <>
      <AppBar
      className= "container"
        color="inherit"
        sx={{
          position: "static"
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <IconButton
              sx={{ color: '#e90606' }}
              aria-label="facebook"
              href='https://www.facebook.com/time'
              target='_blank'
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              sx={{ color: '#e90606' }}
              aria-label="instagram"
              href='https://www.instagram.com/time/?hl=en'
              target='_blank'
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              sx={{ color: '#e90606' }}
              aria-label="twitter"
              href='https://twitter.com/time'
              target='_blank'
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              sx={{ color: '#e90606' }}
              aria-label="pinterest"
              href='https://www.pinterest.com/timemagazine/'
              target='_blank'
            >
              <PinterestIcon />
            </IconButton>
          </Box>
        </Toolbar>
        <Typography variant="body2" align="center" color="text.secondary">
          <Box style={{color: '#383838', fontSize: '10px', padding: '0 16px', marginBottom: '10px'}}>
            ©️ 2023 TIME USA, LLC. All Rights Reserved. Use of this site constitutes acceptance
            of our Terms of Service, Privacy Policy (Your California Privacy Rights) and Do Not
            Sell or Share My Personal Information. TIME may receive compensation for some links
            to products and services on this website. Offers may be subject to change without
            notice. | EU Data Subject Requests
          </Box>
        </Typography>
      </AppBar>
    </>
  );
};

export default UserFooter;