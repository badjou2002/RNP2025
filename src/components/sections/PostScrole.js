import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Card, CardContent, CardHeader, Avatar, IconButton, Typography } from '@mui/material';
import { styled } from '@mui/system';
import SectionHeader from './partials/SectionHeader';
import classNames from 'classnames';

const media = [
    {
        imgUrl: "https://scontent.ftun10-1.fna.fbcdn.net/v/t39.30808-6/487718013_122131724684684131_3205343466147263826_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=75d36f&_nc_ohc=Qa9ScWm-HLIQ7kNvwE3em2I&_nc_oc=AdkTO-iEXl252GRhoTsrJg79qw3_tChzs5mNwzE4RSpdZcTYNX0STnH7joldb18_uIc&_nc_zt=23&_nc_ht=scontent.ftun10-1.fna&_nc_gid=8lvZBMUKa8fQvO2mCFWz4Q&oh=00_AfHZAZE6Fx9MIyhd3vvvgvcu9JVoesn8vtqTRWyYw255ew&oe=67F98B43",
        date: "19 mars 2025",
        caption: "Bienvenue au 'Village إفريقيّة' ! ✨🌍\nFaisons de la Première Réunion Nationale de la JCI Tunisie une expérience inoubliable à ne pas rater !\nÀ cette occasion, plongez dans un voyage unique à travers la richesse de notre pays ! 🎶🍽️\n📢 Appel à toutes les chambres locales de la JCI Tunisie pour participer à 'Village إفريقيّة' !\nChaque OLM mettra à l'honneur son héritage culinaire, musical et culturel à travers des stands élégants et immersifs. Une célébration vibrante de notre diversité et de notre unité ! 💫🔥\n🎯 L'objectif :\n🔹 Explorer les saveurs authentiques 🍲\n🔹 Vibrer au rythme des mélodies traditionnelles 🎶\n🔹 Découvrir le patrimoine unique de chaque région 🏞️\n✨ Un village, mille cultures… êtes-vous prêts pour l'expérience ?\n#Villageإفريقيّة #RNP25 #JCITunisie #JCI_Gremda #JCI_Sidi_Mansour #Culture #Heritage #Networking #Leadership #الجلسة_الوطنية_الأولى_للرؤساء\n📌 Contacts:\nCo-Director: Taher Ben Chehida | +216 52 503 366.\nCo-Director: Mourad Bouattour | +216 21 765 643.\n🌟JCI GREMDA & JCI SIDI MANSOUR🌟",
        titre: "Village إفريقيّة",
        instagramLink: "https://www.instagram.com/p/DHZITbsIjpk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        facebookLink: "https://www.facebook.com/share/p/1Bo6hFPQp4/"
    },
    {
        imgUrl: "https://scontent.ftun10-1.fna.fbcdn.net/v/t39.30808-6/487718013_122131724684684131_3205343466147263826_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=75d36f&_nc_ohc=Qa9ScWm-HLIQ7kNvwE3em2I&_nc_oc=AdkTO-iEXl252GRhoTsrJg79qw3_tChzs5mNwzE4RSpdZcTYNX0STnH7joldb18_uIc&_nc_zt=23&_nc_ht=scontent.ftun10-1.fna&_nc_gid=8lvZBMUKa8fQvO2mCFWz4Q&oh=00_AfHZAZE6Fx9MIyhd3vvvgvcu9JVoesn8vtqTRWyYw255ew&oe=67F98B43",
        date: "19 mars 2025",
        caption: "Bienvenue au 'Village إفريقيّة' ! ✨🌍\nFaisons de la Première Réunion Nationale de la JCI Tunisie une expérience inoubliable à ne pas rater !\nÀ cette occasion, plongez dans un voyage unique à travers la richesse de notre pays ! 🎶🍽️\n📢 Appel à toutes les chambres locales de la JCI Tunisie pour participer à 'Village إفريقيّة' !\nChaque OLM mettra à l'honneur son héritage culinaire, musical et culturel à travers des stands élégants et immersifs. Une célébration vibrante de notre diversité et de notre unité ! 💫🔥\n🎯 L'objectif :\n🔹 Explorer les saveurs authentiques 🍲\n🔹 Vibrer au rythme des mélodies traditionnelles 🎶\n🔹 Découvrir le patrimoine unique de chaque région 🏞️\n✨ Un village, mille cultures… êtes-vous prêts pour l'expérience ?\n#Villageإفريقيّة #RNP25 #JCITunisie #JCI_Gremda #JCI_Sidi_Mansour #Culture #Heritage #Networking #Leadership #الجلسة_الوطنية_الأولى_للرؤساء\n📌 Contacts:\nCo-Director: Taher Ben Chehida | +216 52 503 366.\nCo-Director: Mourad Bouattour | +216 21 765 643.\n🌟JCI GREMDA & JCI SIDI MANSOUR🌟",
        titre: "Village إفريقيّة",
        instagramLink: "https://www.instagram.com/p/DHZITbsIjpk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        facebookLink: "https://www.facebook.com/share/p/1Bo6hFPQp4/"
    },
    {
        imgUrl: "https://scontent.ftun10-1.fna.fbcdn.net/v/t39.30808-6/487718013_122131724684684131_3205343466147263826_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=75d36f&_nc_ohc=Qa9ScWm-HLIQ7kNvwE3em2I&_nc_oc=AdkTO-iEXl252GRhoTsrJg79qw3_tChzs5mNwzE4RSpdZcTYNX0STnH7joldb18_uIc&_nc_zt=23&_nc_ht=scontent.ftun10-1.fna&_nc_gid=8lvZBMUKa8fQvO2mCFWz4Q&oh=00_AfHZAZE6Fx9MIyhd3vvvgvcu9JVoesn8vtqTRWyYw255ew&oe=67F98B43",
        date: "19 mars 2025",
        caption: "Bienvenue au 'Village إفريقيّة' ! ✨🌍\nFaisons de la Première Réunion Nationale de la JCI Tunisie une expérience inoubliable à ne pas rater !\nÀ cette occasion, plongez dans un voyage unique à travers la richesse de notre pays ! 🎶🍽️\n📢 Appel à toutes les chambres locales de la JCI Tunisie pour participer à 'Village إفريقيّة' !\nChaque OLM mettra à l'honneur son héritage culinaire, musical et culturel à travers des stands élégants et immersifs. Une célébration vibrante de notre diversité et de notre unité ! 💫🔥\n🎯 L'objectif :\n🔹 Explorer les saveurs authentiques 🍲\n🔹 Vibrer au rythme des mélodies traditionnelles 🎶\n🔹 Découvrir le patrimoine unique de chaque région 🏞️\n✨ Un village, mille cultures… êtes-vous prêts pour l'expérience ?\n#Villageإفريقيّة #RNP25 #JCITunisie #JCI_Gremda #JCI_Sidi_Mansour #Culture #Heritage #Networking #Leadership #الجلسة_الوطنية_الأولى_للرؤساء\n📌 Contacts:\nCo-Director: Taher Ben Chehida | +216 52 503 366.\nCo-Director: Mourad Bouattour | +216 21 765 643.\n🌟JCI GREMDA & JCI SIDI MANSOUR🌟",
        titre: "Village إفريقيّة",
        instagramLink: "https://www.instagram.com/p/DHZITbsIjpk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        facebookLink: "https://www.facebook.com/share/p/1Bo6hFPQp4/"
    },
];

const ScrollContainer = styled('div')({
    display: 'flex',
    gap: '16px',
    overflowX: 'auto',
    scrollSnapType: 'x mandatory',
    padding: '2rem',
    '&::-webkit-scrollbar': {
        display: 'none'
    }
});

const ScrollItem = styled(motion.div)({
    scrollSnapAlign: 'center',
    flex: '0 0 auto',
});

function PostScrole(props) {
    const [expandedIndex, setExpandedIndex] = React.useState(-1);

    const handleExpandClick = (index) => {
        setExpandedIndex(expandedIndex === index ? -1 : index);
    };

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
        'team section',
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
        'tiles-wrap reveal-from-bottom',
        pushLeft && 'push-left'
    );

    const sectionHeader = {
        title: 'Contenu Multimédia',
        paragraph: 'Explorez nos vidéos, photos et autres contenus visuels captivants.'
    };


    return (
        <section className={outerClasses}>
            <div className="container">
                <div className={innerClasses}>
                    <SectionHeader data={sectionHeader} className="center-content reveal-from-bottom" />
                    <div className={tilesClasses} >
                        <ScrollContainer>
                            {media.map((post, index) => (
                                <ScrollItem
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    style={{ minWidth: 300, marginLeft: index === 0 ? '30%' : '0', marginRight: index === media.length ? '30%' : '0' }}
                                    className="reveal-from-bottom"
                                >

                                    <AnimatePresence mode="wait">
                                        <motion.div key={'all'} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                                            <Card sx={{ width: { sm: 500, xs: 350 }, height: '100%', borderRadius: 4, boxShadow: 4, }}>
                                                <CardHeader
                                                    avatar={<Avatar src="https://res.cloudinary.com/dhh8gu8oi/image/upload/v1743842276/470486287_122109370886684131_1080407749902583934_n_z4illl.jpg" />}
                                                    title="1ère RNP 2025"
                                                    subheader={post.date}
                                                />
                                                <img
                                                    src={post.imgUrl}
                                                    alt={post.titre}
                                                    style={{ width: '100%', height: { sm: 700, xs: 400 }, objectFit: 'cover' }}
                                                />
                                                <CardContent>
                                                    <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                                                        {post.titre}
                                                    </Typography>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                        <div>
                                                            <IconButton href={post.instagramLink} target="_blank" rel="noopener">
                                                                <InstagramIcon size={20} />
                                                            </IconButton>
                                                            <IconButton href={post.facebookLink} target="_blank" rel="noopener">
                                                                <FacebookIcon size={20} />
                                                            </IconButton>
                                                        </div>
                                                        <IconButton onClick={() => handleExpandClick(index)}>
                                                            <motion.div
                                                                animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                                                                transition={{ duration: 0.3 }}
                                                            >
                                                                <ExpandMoreIcon size={20} />
                                                            </motion.div>
                                                        </IconButton>
                                                    </div>
                                                    <motion.div
                                                        initial={false}
                                                        animate={{ height: expandedIndex === index ? 'auto' : 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        style={{ overflow: 'hidden' }}
                                                    >
                                                        <Typography variant="body2" color="text.secondary" sx={{ whiteSpace: 'pre-line', mt: 2 }}>
                                                            {post.caption}
                                                        </Typography>
                                                    </motion.div>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    </AnimatePresence>
                                </ScrollItem>

                            ))}
                        </ScrollContainer>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PostScrole;