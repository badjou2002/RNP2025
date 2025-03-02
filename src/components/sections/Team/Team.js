import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../../utils/SectionProps';
import SectionHeader from '../partials/SectionHeader';
import { Box, Grid,  Typography} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import TeamMemberCard from './components/TeamMemberCard';

const userTestimonials = [
  {
    id: 1,
    name: "Taher BEN CHEHIDA",
    role: "Co-directeur",
    bio: "Co-directeur avec une vision stratégique pour l'organisation et ses initiatives.",
    imageUrl: "https://res.cloudinary.com/dhh8gu8oi/image/upload/v1734630031/IMG_1627-DeNoiseAI-low-light-removebg-preview_ywalzk.png",
    socialLinks: {
      instagram: "https://www.instagram.com/taher_ben_chehida/",
      facebook: "https://www.facebook.com/titi.bch"
    }
  },
  {
    id: 2,
    name: "Mourad BOUAATOUR",
    role: "Co-directeur",
    bio: "Co-directeur apportant son expertise et son leadership pour guider l'équipe vers le succès.",
    imageUrl: "https://res.cloudinary.com/dhh8gu8oi/image/upload/v1734630182/164329456_2820840004832474_2405024728637127920_n-removebg-preview_trcoyw.png",
    socialLinks: {
      instagram: "https://www.instagram.com/mouradbouattour/",
      facebook: "https://www.facebook.com/mourad.bouattour.3"
    }
  },
  {
    id: 3,
    name: "Maryam BEN ZINA",
    role: "Président JCI Sidi Mansour 2025",
    bio: "Président de JCI Sidi Mansour pour l'année 2025, menant des initiatives communautaires importantes.",
    imageUrl: "https://res.cloudinary.com/dhh8gu8oi/image/upload/v1734630030/IMG_1623-DeNoiseAI-low-light-removebg-preview_twwypn.png",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/maryam-benzina-6bb5aa20a/",
      instagram: "https://www.instagram.com/maryam_ben_zina/",
      facebook: "https://www.facebook.com/benzina.maryam"
    }
  },
  {
    id: 4,
    name: "Sahar MEJRI",
    role: "Président JCI Gremda 2025",
    bio: "Président de JCI Gremda pour l'année 2025, dirigeant des projets d'impact local.",
    imageUrl: "https://res.cloudinary.com/dhh8gu8oi/image/upload/v1734630030/437491181_7322973101129634_3063626686712410848_n-removebg-preview_m0iirv.png",
    socialLinks: {
      instagram: "https://www.instagram.com/mejri.sahar73/",
      facebook: "https://www.facebook.com/sahar.mejri"
    }
  },
  {
    id: 5,
    name: "Basma BARKALLAH",
    role: "Secrétaire générale",
    bio: "Secrétaire générale assurant une gestion efficace des documents et de la communication interne.",
    imageUrl: "https://res.cloudinary.com/dhh8gu8oi/image/upload/v1740584720/Design_sans_titre_22_b4zikk.png",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/basma-barkallah-91256b17a/",
      instagram: "https://www.instagram.com/basma_barkallah/",
      facebook: "https://www.facebook.com/basma.barkallah.9"
    }
  },
  {
    id: 6,
    name: "Mahdi TRABELSI",
    role: "Trésorier",
    bio: "Trésorier responsable de la gestion financière et de la planification budgétaire de l'organisation.",
    imageUrl: "https://res.cloudinary.com/dhh8gu8oi/image/upload/v1739201419/Design_sans_titre_14_awy1wj.png",
    socialLinks: {
    }
  },
  {
    id: 7,
    name: "Mohamed ALI YENGUI",
    role: "Chef comité marketing",
    bio: "Chef du comité marketing, élaborant des stratégies innovantes pour promouvoir nos initiatives.",
    imageUrl: "https://res.cloudinary.com/dhh8gu8oi/image/upload/v1740583501/Design_sans_titre_21_czmkbq.png",
    socialLinks: {
      instagram: "https://www.instagram.com/daly_yengui/",
      facebook: "https://www.facebook.com/mohamedali.yengui"
    }
  },
  {
    id: 8,
    name: "Manel BEN LTAIEF",
    role: "Chef comité média",
    bio: "Chef du comité média, supervisant la création de contenu et la présence sur les réseaux sociaux.",
    imageUrl: "https://res.cloudinary.com/dhh8gu8oi/image/upload/v1739030581/rcro3ttjbzmzwxjbihss.png",
    socialLinks: {
      instagram: "https://www.instagram.com/manel.ltaief/",
      facebook: "https://www.facebook.com/profile.php?id=100007529074157"
    }
  },
  {
    id: 9,
    name: "Ramzi SOUSSI",
    role: "Chef comité sponsoring",
    bio: "Chef du comité sponsoring, établissant des partenariats stratégiques pour soutenir nos projets.",
    imageUrl: "https://res.cloudinary.com/dhh8gu8oi/image/upload/v1739031611/Ramzi_pixmzq.png",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/ramzi-soussi-65915a57/",
      instagram: "https://www.instagram.com/ramzi.22/",
      facebook: "https://www.facebook.com/ricardo.ramzi"
    }
  },
  {
    id: 10,
    name: "Salma RJEB",
    role: "Chef comité événement",
    bio: "Chef du comité événement, organisant des manifestations impactantes pour notre communauté.",
    imageUrl: "https://res.cloudinary.com/dhh8gu8oi/image/upload/v1739034170/Design_sans_titre_4_owzjhb.png",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/salma-rjeb-0262ab128/",
      instagram: "https://www.instagram.com/mariem.salma4/",
      facebook: "https://www.facebook.com/profile.php?id=1199420954"
    }
  },
  {
    id: 11,
    name: "Mohamed GHORBEL",
    role: "Chef comité logistique",
    bio: "Chef du comité logistique, assurant le bon déroulement opérationnel de tous nos événements.",
    imageUrl: "https://res.cloudinary.com/dhh8gu8oi/image/upload/v1739034159/Design_sans_titre_5_j8kkwz.png",
    socialLinks: {
      instagram: "https://www.instagram.com/mohamed.ghorbel.3785/",
      facebook: "https://www.facebook.com/7mayda"
    }
  },
  {
    id: 12,
    name: "Ghassen EL KAMEL",
    role: "Chef comité développement mobile",
    bio: "Chef du comité développement mobile, créant des applications innovantes pour notre communauté.",
    imageUrl: "https://res.cloudinary.com/dhh8gu8oi/image/upload/v1739035627/Gassen_r2apuf.png",
    socialLinks: {
      instagram: "https://www.instagram.com/ghassen_el_kamel/",
      facebook: "https://www.facebook.com/gh0ssen"
    }
  },
  {
    id: 13,
    name: "Bilel ABDELMAKSOUD",
    role: "Chef comité développement web",
    bio: "Chef du comité développement web, dirigeant les initiatives de présence numérique et de solutions web.",
    imageUrl: "https://res.cloudinary.com/dhh8gu8oi/image/upload/v1740773517/Design_sans_titre_23_lcmbeo.png",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/bilel-abdelmaksoud-160a962bb/",
      instagram: "https://www.instagram.com/abdelmaksoud_bilel/",
      facebook: "https://www.facebook.com/badjou2002/"
    }
  },
];

const propTypes = {
  ...SectionTilesProps.types
};

const defaultProps = {
  ...SectionTilesProps.defaults
};

const Team = (props) => {
  const {
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    pushLeft,
  } = props;

  const outerClasses = classNames(
    'news section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'news-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Équipe de pilotage',
    paragraph: 'Comité de pilotage de la Première Réunion Nationale des Présidents - JCI Tunisie.'
  };

  return (
    <section className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content reveal-from-bottom" />
          <div className={tilesClasses} >
            <AnimatePresence mode="wait">
              <motion.div key={'all'} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <Grid container spacing={4} sx={{ justifyContent: 'center', }}>
                  {userTestimonials.length > 0 ? (
                    userTestimonials.map((member, index) => (
                      <Grid item key={member.id} xs={12} sm={6} md={4} >
                        <TeamMemberCard member={member} index={index} />
                      </Grid>
                    ))
                  ) : (
                    <Box sx={{ width: '100%', textAlign: 'center', py: 8 }}>
                      <Typography variant="h6" color="text.secondary">
                        Aucun membre de l'équipe ne correspond à votre recherche.
                      </Typography>
                    </Box>
                  )}
                </Grid>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

Team.propTypes = propTypes;
Team.defaultProps = defaultProps;

export default Team;
