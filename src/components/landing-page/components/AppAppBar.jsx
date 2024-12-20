import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';

function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',
              bgcolor:
                theme.palette.mode === 'light'
                  ? 'rgba(255, 255, 255, 0.5)'
                  : 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                px: 0,
                justifyContent: 'space-between'
              }}
            >
              <img
                src={
                  'https://res.cloudinary.com/dhh8gu8oi/image/upload/v1733774649/Untitled-4_zyc0ao.svg'
                }
                style={{
                  width: '60px',
                  cursor: 'pointer',
                  margin: 20
                }}
                alt="logo of sitemark"
              />
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <MenuItem
                  onClick={() => scrollToSection('Accueil')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body1" color={'#606060'}>
                    Accueil
                  </Typography>
                </MenuItem>
                {/* <MenuItem
                  onClick={() => scrollToSection('Partenariat')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body1" color={'#606060'}>
                    Partenariat
                  </Typography>
                </MenuItem>*/}
                <MenuItem
                  onClick={() => scrollToSection('Location')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body1" color={'#606060'}>
                    Localisation
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('Equipe')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body1" color={'#606060'}>
                    Equipe
                  </Typography>
                </MenuItem>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
              }}
            >
              {/*<><ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
              <Button
                color="primary"
                variant="text"
                size="small"
                component="a"
                href="/material-ui/getting-started/templates/sign-in/"
                target="_blank"
              >
                Sign in
              </Button></>*/}
              <Button
                size="medium"
                component="a"
                href="https://docs.google.com/forms/d/e/1FAIpQLScI4yELiRiDv4ve4iMMV0md2rZlTKMQ4p82z5NnHw2hGSaB3Q/viewform?usp=dialog"
                target="_blank"
                sx={{ color: 'white', backgroundColor: '#EF5244', m: 2 }}
              >
                Inscrivez-vous
              </Button>
            </Box>
            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant="text"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px', color: "#EF5244" }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    Width: '60dvw',
                    p: 4,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  <MenuItem
                    onClick={() => scrollToSection('Accueil')}
                    sx={{ py: '6px', px: '12px' }}
                  >
                    <Typography variant="body1" color={'#606060'}>
                      Accueil
                    </Typography>
                  </MenuItem>
                  {/*<MenuItem
                    onClick={() => scrollToSection('Partenariat')}
                    sx={{ py: '6px', px: '12px' }}
                  >
                    <Typography variant="body1" color={'#606060'}>
                      Partenariat
                    </Typography>
                  </MenuItem>*/}
                  <MenuItem
                    onClick={() => scrollToSection('Location')}
                    sx={{ py: '6px', px: '12px' }}
                  >
                    <Typography variant="body1" color={'#606060'}>
                      Localisation
                    </Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => scrollToSection('Equipe')}
                    sx={{ py: '6px', px: '12px' }}
                  >
                    <Typography variant="body1" color={'#606060'}>
                      Equipe
                    </Typography>
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <Button
                      size="medium"
                      component="a"
                      href="https://docs.google.com/forms/d/e/1FAIpQLScI4yELiRiDv4ve4iMMV0md2rZlTKMQ4p82z5NnHw2hGSaB3Q/viewform?usp=dialog"
                      target="_blank"
                      sx={{ color: 'white', backgroundColor: '#EF5244', m: 2 }}
                    >
                      Inscrivez-vous
                    </Button>
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

AppAppBar.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default AppAppBar;
