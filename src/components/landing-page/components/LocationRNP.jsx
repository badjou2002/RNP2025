import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function LocationRNP() {
  return (
    <Container sx={{ py: { xs: 8, sm: 16 } }}>
      <div style={{ textAlign: 'start' }}>
        <Typography sx={{ mb: 5, fontSize: { sm: '50px', xs: '30px' } }} component="h2" variant="h2" color={'#606060'}>
          Localisation
        </Typography>
      </div>
      <Grid container spacing={6}>
        <Grid item xs={12} md={5} sx={{ display: { sm: 'flex', xs: 'flow' }, justifyContent: 'center', alignItems: 'center' }}>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems={{ xs: 'center', sm: 'start' }}
            spacing={2}
            useFlexGap
            sx={{ width: '100%', display: { xs: 'flex', sm: 'flex' } }}
          >
            <Typography component="h2" variant="h5" color="text.primary" sx={{ ml: 1, fontSize: { sm: '20px', xs: '15px' } }}>
              Hôtel Riviera Sousse Port El Kantaoui
            </Typography>
            <Typography component="h2" variant="h6" color="text.primary" sx={{ ml: 1, fontSize: { sm: '20px', xs: '15px' } }}>
              <EventIcon sx={{ mr: 1, mb: -0.5 }} />
              18 Avril - 20 Avril
            </Typography>
            <Typography component="h2" variant="body1" color="text.primary" sx={{ ml: 2, mt: -2, fontSize: { sm: '16px', xs: '12px' } }}>
              RNP Date
            </Typography>
            <Typography component="h2" variant="h6" color="text.primary" sx={{ ml: 1, fontSize: { sm: '20px', xs: '15px' } }}>
              <LocationOnIcon sx={{ mr: 1, mb: -0.5 }} />
              PORT EL KANTAOUI (BP55),<br />Hammam Sousse 4089
            </Typography>
            <Typography component="h2" variant="body1" color="text.primary" sx={{ ml: 2, mt: -2, fontSize: { sm: '16px', xs: '12px' } }}>
              Adresse
            </Typography>
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={7}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.832436199605!2d10.582440275836158!3d35.90211937251675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd89983e12d49b%3A0x8497d3566425a0da!2sH%C3%B4tel%20Riviera%20Sousse%20Port%20El%20Kantaoui!5e0!3m2!1sfr!2stn!4v1739031812788!5m2!1sfr!2stn"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade" />
        </Grid>
      </Grid>
    </Container>
  );
}
