import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  CardActions,
  Chip
} from '@mui/material';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const TeamMemberCard = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.2 }
      }}
    >
      <Card
      className='center-content reveal-from'
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'box-shadow 0.3s',
          '&:hover': {
            boxShadow: '0 12px 20px rgba(0, 0, 0, 0.1)'
          },
          position: 'relative',
          overflow: 'hidden',
          backgroundColor:' rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(100px)',
        }}
      >
        <motion.div
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.6 }
          }}
          style={{ overflow: 'hidden' }}
        >
          <CardMedia
            component="img"
            height="240"
            image={member.imageUrl}
            alt={member.name}
            sx={{
              objectFit: 'cover',
              transition: 'transform 0.6s',
            }}
          />
        </motion.div>

        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
            {member.name}
          </Typography>
          <Chip
            label={member.role}
            size="small"
            sx={{
              mb: 2,
              backgroundColor: 'primary.main',
              color: 'white',
              fontWeight: 'medium'
            }}
          />
          <Typography variant="body2" color="text.secondary">
            {member.bio}
          </Typography>
        </CardContent>

        <CardActions sx={{ justifyContent: 'flex-start', padding: '0 16px 16px 16px' }}>
          {member.socialLinks?.linkedin && (
            <motion.div whileHover={{ y: -3, scale: 1.1 }}>
              <IconButton
                aria-label="linkedin"
                size="small"
                color="primary"
                href={member.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon size={20} />
              </IconButton>
            </motion.div>
          )}
          {member.socialLinks?.instagram && (
            <motion.div whileHover={{ y: -3, scale: 1.1 }}>
              <IconButton
                aria-label="instagram"
                size="small"
                color="primary"
                href={member.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon size={20} />
              </IconButton>
            </motion.div>
          )}
          {member.socialLinks?.facebook && (
            <motion.div whileHover={{ y: -3, scale: 1.1 }}>
              <IconButton
                aria-label="facebook"
                size="small"
                color="primary"
                href={member.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon size={20} />
              </IconButton>
            </motion.div>
          )}
        </CardActions>
      </Card>
    </motion.div>
  );
};

export default TeamMemberCard;
