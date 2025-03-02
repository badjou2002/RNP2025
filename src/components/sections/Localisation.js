import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

class Localisation extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      pushLeft,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'team section center-content',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'team-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap',
      pushLeft && 'push-left'
    );

    const sectionHeader = {
      title: 'Localisation',
      paragraph: "Hôtel L'Orient Palace Sousse"
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content reveal-from-bottom" />
            <div className={tilesClasses}>
              <Grid container spacing={6}>
                <Grid item xs={12} md={5} sx={{ display: { sm: 'flex', xs: 'flow' }, justifyContent: 'center', alignItems: 'center' }}>
                  <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems={{ xs: 'center', sm: 'start' }}
                    spacing={2}
                    useFlexGap
                    sx={{ width: '100%', display: { xs: 'flex', sm: 'flex' } }}
                    className="reveal-from-bottom"
                  >
                    <Typography component="h2" variant="h6" color="text.primary" sx={{ ml: 1, fontSize: { sm: '20px', xs: '15px' } }}>
                      <EventIcon sx={{ mr: 1, mb: -0.5 }} />
                      18 Avril - 20 Avril
                    </Typography>
                    <Typography component="h2" variant="body1" color="text.primary" sx={{ ml: 2, mt: -2, fontSize: { sm: '16px', xs: '12px' } }}>
                      RNP Date
                    </Typography>
                    <Typography component="h2" variant="h6" color="text.primary" sx={{ ml: 1, fontSize: { sm: '20px', xs: '15px' } }}>
                      <LocationOnIcon sx={{ mr: 1, mb: -0.5 }} />
                      VJ68+6FR, Av. 14 Janvier, Sousse 4051
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
                  className="reveal-from-bottom"
                >
                  <iframe
                    title='Localisation'
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3233.459492909338!2d10.617393477461329!3d35.86225496577845!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd8a0c85142b6f%3A0xbd8001a3614f6d92!2sOrient%20Palace%20Hotel!5e0!3m2!1sen!2sus!4v1733840272750!5m2!1sen!2sus"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade" />
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Localisation.propTypes = propTypes;
Localisation.defaultProps = defaultProps;

export default Localisation;