import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const logoStyle = {
  width: '100px',
  height: 'auto',
};

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {'Copyright © '}
      <Link href="">1ére RNP 2025&nbsp;</Link>
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 4 },
        py: { xs: 8, sm: 10 },
        textAlign: { xs: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: { md: 'flex', sm: 'flow', xs: 'flow' },
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            minWidth: { xs: '100%', sm: '60%' },
          }}
        >
          <Box sx={{ width: { xs: '100%' } }}>
            <Box sx={{ ml: '-15px' }}>
              <img
                src={
                  'https://res.cloudinary.com/dhh8gu8oi/image/upload/v1733774649/Untitled-4_zyc0ao.svg'
                }
                style={logoStyle}
                alt="logo of sitemark"
              />
            </Box>
            <Typography variant="body2" fontWeight={600} gutterBottom>
              Inscription
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Inscrivez-vous pour nous rejoindre.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: { sm: 'flex' },
            mr: { xs: 0, sm: 0 },
            flexDirection: 'column',
            gap: 1,
            justifyContent: 'center',
            width: '100%',
            mb: 2,
            textAlign: 'center'
          }}
        >
          <Typography variant="body2" fontWeight={600} sx={{
            textAlign: 'center'
          }}>
            Contact
          </Typography>
          <Typography variant="body2" >
            <EmailIcon sx={{ m: 1, mb: -1 }} />
            <Link href="mailto:contact@rnp25.com">
              contact@rnp25.com
            </Link>
          </Typography>
          <Typography variant="body2" >
            <LocalPhoneIcon sx={{ m: 1, mb: -1 }} />
            +216 52 503 366
          </Typography>
          <Typography variant="body2" >
            <LocalPhoneIcon sx={{ m: 1, mb: -1 }} />
            +216 21 765 643
          </Typography>
        </Box>
        {/*<Box
          sx={{
            display: { sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
            textAlign: { md: 'center' }
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Application
          </Typography>
          <Box
            sx={{
              display: 'flow',
              flexDirection: 'column',
              gap: 4,
              minWidth: { xs: '100%', sm: '60%' },
            }}
          >
            <img
              src={
                'https://res.cloudinary.com/dhh8gu8oi/image/upload/v1733852510/playStore_b62fwp.svg'
              }
              style={{ width: 170 }}
              alt="Play store"
            />
            <img
              src={
                'https://res.cloudinary.com/dhh8gu8oi/image/upload/v1733852510/AppStore_hdseyr.svg'
              }
              style={{ width: 170 }}
              alt="App store"
            />
          </Box>
        </Box>
        */}
      </Box>
      <Box
        sx={{
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
          display: { md: 'flex', sm: 'flow', xs: 'flow' },

        }}
      >
        <div style={{ marginBottom: 6 }}>
          <Link color="text.secondary" href="">
            Privacy Policy
          </Link>
          <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link color="text.secondary" href="">
            Terms of Service
          </Link>
          <Copyright />
        </div>
        <Stack
          direction="row"
          justifyContent="center"
          spacing={1}
          useFlexGap
          sx={{
            color: 'text.secondary',
          }}
        >
          <IconButton
            color="inherit"
            href=""
            aria-label="Facebook"
            sx={{ alignSelf: 'center' }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href=""
            aria-label="Instagram"
            sx={{ alignSelf: 'center' }}
          >
            <InstagramIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
