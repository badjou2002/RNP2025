import React from 'react';
import classNames from 'classnames';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const FooterSocial = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-social',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <IconButton
            href=""
            aria-label="Facebook"
            sx={{ alignSelf: 'center', color: 'white' }}
          >
            <FacebookIcon />
            <Typography variant="body2" mb={2}>
              Rejoignez-nous sur Facebook
            </Typography>
          </IconButton>

        </li>
        <li>
          <IconButton
            color=""
            href=""
            aria-label="Instagram"
            sx={{ alignSelf: 'center', color: 'white' }}
          >
            <InstagramIcon />
            <Typography variant="body2" mb={2}>
              Rejoignez-nous sur Instagram
            </Typography>
          </IconButton>
        </li>
      </ul>
    </div>
  );
}

export default FooterSocial;