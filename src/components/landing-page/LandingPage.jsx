import * as React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import AppAppBar from './components/AppAppBar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import getLPTheme from './getLPTheme';
import LocationRNP from './components/LocationRNP';
import Partenariat from './components/Partenariat';
import CountDown from './components/countdown/CountDown';
import Equipe from './components/Equipe';

function ToggleCustomTheme({ showCustomTheme, toggleCustomTheme }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100dvw',
        position: 'fixed',
        bottom: 24,
      }}
    >
      <ToggleButtonGroup
        color="primary"
        exclusive
        value={showCustomTheme}
        onChange={toggleCustomTheme}
        aria-label="Platform"
        sx={{
          backgroundColor: 'background.default',
          '& .Mui-selected': {
            pointerEvents: 'none',
          },
        }}
      >
        <ToggleButton value>
          <AutoAwesomeRoundedIcon sx={{ fontSize: '20px', mr: 1 }} />
          Custom theme
        </ToggleButton>
        <ToggleButton value={false}>Material Design 2</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}

ToggleCustomTheme.propTypes = {
  showCustomTheme: PropTypes.shape({
    valueOf: PropTypes.func.isRequired,
  }).isRequired,
  toggleCustomTheme: PropTypes.func.isRequired,
};

export default function LandingPage() {
  const [mode, setMode] = React.useState('light');
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
      <CssBaseline />
      <AppAppBar />
      <Box sx={{ bgcolor: 'background.default' }}>
        <Hero />
        <center>
          <Box
            sx={{
              width: '97vw',
              marginTop: { xs: '-30px', sm: '-70px' },
              borderRadius: '20px',
              boxShadow: '0px 2px 50px -20px rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(100px)',
              backgroundColor: 'rgb(255,255,255,0.2)',
              marginBottom: 3,
            }}
          >
            <CountDown />
            {/*<Partenariat />*/}
            <div id="Partenariat"></div>
            <LocationRNP />
            <div id="Location"></div>
            <Divider />
            <Equipe />
            <div id="Equipe"></div>
          </Box>
        </center>
        <Divider />
        <Footer />
      </Box>

    </ThemeProvider>
  );
}
