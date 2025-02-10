import * as React from 'react';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';

const userTestimonials = [
  {
    avatar: "https://res.cloudinary.com/dhh8gu8oi/image/upload/v1734630031/IMG_1627-DeNoiseAI-low-light-removebg-preview_ywalzk.png",
    name: 'Taher BEN CHEHIDA',
    occupation: 'Directeur',
  },
  {
    avatar: "https://res.cloudinary.com/dhh8gu8oi/image/upload/v1734630182/164329456_2820840004832474_2405024728637127920_n-removebg-preview_trcoyw.png",
    name: 'Mourad BOUAATOUR',
    occupation: 'Directeur',
  },
  {
    avatar: "https://res.cloudinary.com/dhh8gu8oi/image/upload/v1734630030/IMG_1623-DeNoiseAI-low-light-removebg-preview_twwypn.png",
    name: 'Maryam BEN ZINA',
    occupation: 'Président JCI Sidi Mansour 2025',
  },
  {
    avatar: "https://res.cloudinary.com/dhh8gu8oi/image/upload/v1734630030/437491181_7322973101129634_3063626686712410848_n-removebg-preview_m0iirv.png",
    name: 'Sahar MEJRI',
    occupation: 'Président JCI Gremda 2025',
  },
  {
    avatar: "https://res.cloudinary.com/dhh8gu8oi/image/upload/v1739201419/Design_sans_titre_14_awy1wj.png",
    name: 'Mahdi TRABELSI',
    occupation: 'Trésorier',
  },
  {
    avatar: "https://res.cloudinary.com/dhh8gu8oi/image/upload/v1739030581/rcro3ttjbzmzwxjbihss.png",
    name: 'Manel BEN LTAIEF',
    occupation: 'Chef comité média',
  },
  {
    avatar: "https://res.cloudinary.com/dhh8gu8oi/image/upload/v1739031611/Ramzi_pixmzq.png",
    name: 'Ramzi SOUSSI',
    occupation: 'Chef comité sponsoring',
  },
  {
    avatar: "https://res.cloudinary.com/dhh8gu8oi/image/upload/v1739034170/Design_sans_titre_4_owzjhb.png",
    name: 'Salma RJEB',
    occupation: 'Chef comité événement',
  },
  {
    avatar: "https://res.cloudinary.com/dhh8gu8oi/image/upload/v1739034159/Design_sans_titre_5_j8kkwz.png",
    name: 'Mohamed GHORBEL',
    occupation: 'Chef comité logistique',
  },
  {
    avatar: "https://res.cloudinary.com/dhh8gu8oi/image/upload/v1739035612/Design_sans_titre_11_yedbrs.png",
    name: 'Bilel ABDELMAKSOUD',
    occupation: 'Chef comité développement',
  },
  {
    avatar: "https://res.cloudinary.com/dhh8gu8oi/image/upload/v1739035627/Gassen_r2apuf.png",
    name: 'Ghassen EL KAMEL',
    occupation: 'Chef comité développement',
  },
];

export default function Equipe() {
  const theme = useTheme();

  return (
    <Container
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        gap: { xs: 3, sm: 9 },

      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '100%' },
          textAlign: { sm: 'left', md: 'center' },
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'flex-end'
        }}
      >
        <Typography component="h2" variant="h2" color={'#606060'} sx={{ fontSize: { sm: '50px', xs: '30px' } }}>
          Equipe
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ display: "flex", justifyContent: 'center' }}>
        {userTestimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                p: 1,
                backgroundColor: "transparent"
              }}
            >
              <Box
                sx={{
                  display: 'flow',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  pr: 2,
                }}
              >
                <Avatar sx={{ width: { xs: 100, md: 150 }, height: { xs: 100, md: 150 }, m: 2, fontSize: { xs: 60, md: 80 }, backgroundColor: 'rgba(96, 96, 96, 0.6)' }} src={testimonial.avatar} alt={testimonial.name} />
                <Box>
                  <Typography component="h2" variant="h5" color="text.primary" sx={{ fontSize: { sm: '20px', xs: '15px' } }}>{testimonial.name}</Typography>
                  <Typography component="h2" variant="h6" color="text.primary" sx={{ fontSize: { sm: '16px', xs: '12px' } }}>{testimonial.occupation}</Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
