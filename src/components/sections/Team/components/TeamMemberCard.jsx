import React from 'react';
import {
  Card,
  IconButton,
  ImageListItem,
  ImageListItemBar
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
        className='center-content'
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
          backgroundColor: ' rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(100px)',
        }}
      >
        <motion.div
          whileHover={{
            scale: 1.01,
            transition: { duration: 0.6 }
          }}
          style={{ overflow: 'hidden' }}
        >
          <ImageListItem key={member.id}>
            <img
              srcSet={`${member.imageUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${member.imageUrl}?w=248&fit=crop&auto=format`}
              alt={member.name}
              loading="lazy"
            />
            <ImageListItemBar
              title={member.name}
              subtitle={member.role}
              actionIcon={<div style={{display:'flex'}}>
                <motion.div whileHover={{ y: -3, scale: 1.1 }}>
                  {member.socialLinks?.linkedin && (
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
                  )}
                </motion.div>
                <motion.div whileHover={{ y: -3, scale: 1.1 }}>
                  {member.socialLinks?.instagram && (
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
                  )}
                </motion.div>
                <motion.div whileHover={{ y: -3, scale: 1.1 }}>
                  {member.socialLinks?.facebook && (
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
                  )}
                </motion.div></div>
              }
            />
          </ImageListItem>
        </motion.div>
      </Card>
    </motion.div>
  );
};

export default TeamMemberCard;
