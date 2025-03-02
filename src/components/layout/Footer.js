import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';

const StyledLink = styled(Link)(({ theme }) => ({
  color: 'inherit',
  textDecoration: 'none !important',
  '&:hover': {
    color: '#fff',
  },
}));
const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool
}

const defaultProps = {
  topOuterDivider: false,
  topDivider: false
}

class Footer extends React.Component {

  render() {
    const {
      className,
      topOuterDivider,
      topDivider,
      ...props
    } = this.props;

    const classes = classNames(
      'site-footer invert-color center-content-mobile',
      topOuterDivider && 'has-top-divider',
      className
    );

    return (
      < footer
        {...props}
        className={classes}
        style={{ padding: 50 }}
      >

        <Container maxWidth="lg">
          <Grid container spacing={2} sx={{ justifyContent: 'space-between' }}>
            {/* Logo and Description */}
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 2 }}>
                <img
                  src="https://res.cloudinary.com/dhh8gu8oi/image/upload/v1740514523/Untitled-4_zyc0ao_gy2a2t.svg"
                  alt="RNP Logo"
                  style={{ width: '80px', height: 'auto' }}
                />
              </Box>
              <Typography variant="h6" sx={{ color: '#fff', mb: 2 }}>
                Première Réunion Nationale des Présidents 2025
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Première Réunion Nationale des Présidents 2025 - Jeune Chambre Internationale Tunisie.
                Inscrivez-vous pour nous rejoindre.
              </Typography>
              <Box>
                <IconButton
                  href="https://www.facebook.com/profile.php?id=61570523956187"
                  target='_blank'
                  aria-label="Instagram"
                  sx={{
                    color: '#60a5fa',
                    '&:hover': { color: '#93c5fd' }
                  }}
                >
                  <FacebookIcon fontSize="medium" sx={{ color: '#fff' }} />
                </IconButton>
                <IconButton
                  href="https://www.instagram.com/rnp1_2025/"
                  target='_blank'
                  aria-label="Instagram"
                  sx={{
                    color: '#60a5fa',
                    '&:hover': { color: '#93c5fd' }
                  }}
                >
                  <InstagramIcon fontSize="medium" sx={{ color: '#fff' }} />
                </IconButton>
              </Box>
            </Grid>

            {/* Contact Column */}
            <Grid item xs={12} md={3}>
              <Typography variant="body1" sx={{ color: '#fff', mb: 2, textAlign: {xs:'center',sm:'start'} }}>
                Contact
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, justifyContent: 'start', alignItems: {xs:'center',sm:'start'}  }}>
                <StyledLink
                  href="mailto:contact@rnp25.com"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    fontSize: '15px'
                  }}
                >
                  <EmailIcon fontSize="small" sx={{ color: '#fff' }} />
                  <span>contact@rnp25.com</span>
                </StyledLink>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  fontSize: '15px'
                }}>
                  <PhoneIcon fontSize="small" sx={{ color: '#fff' }} />
                  <span>+216 52 503 366</span>
                </Box>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  fontSize: '15px'
                }}>
                  <PhoneIcon fontSize="small" sx={{ color: '#fff' }} />
                  <span>+216 21 765 643</span>
                </Box>
              </Box>
            </Grid>
          </Grid>

          {/* Copyright */}
          <Box sx={{
            mt: 6,
            pt: 3,
            borderTop: '1px solid #374151',
            textAlign: 'center'
          }}>
            <Typography variant="body2">
              Copyright © 1ére RNP 2025
            </Typography>
          </Box>
        </Container>

      </footer>
    );
  }
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;