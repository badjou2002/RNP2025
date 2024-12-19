import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';


export default function Hero() {
  return (
    <Box
      id="Accueil"
      sx={{
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: { xs: '200px', sm: '650px' },
        backgroundImage: { xs: "url('https://res.cloudinary.com/dhh8gu8oi/image/upload/v1733920447/Couverture_Small_igmata.svg')", sm: "url('https://res.cloudinary.com/dhh8gu8oi/image/upload/v1733837568/Couverture_zja34x_wzmuoz.svg')" },
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: 'auto', sm: 'auto' } }}
          >
            <Button
              component="a"
              href="https://docs.google.com/forms/d/e/1FAIpQLScI4yELiRiDv4ve4iMMV0md2rZlTKMQ4p82z5NnHw2hGSaB3Q/viewform?usp=dialog"
              target="_blank"
              size="large"
              sx={{ width: { sm: 200, xs: 20 }, fontSize: { sm: 24, xs: 6 }, color: 'white', backgroundColor: '#EF5244', marginTop: { sm: '250px', xs: '0px' } }}
            >
              Inscrivez-vous
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
