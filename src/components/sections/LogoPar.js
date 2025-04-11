import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import SectionHeader from './partials/SectionHeader';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';

const logos = [
    'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    'https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png',
    'https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
    'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    // Ajoute ici les logos de tes partenaires
];

const propTypes = {
    ...SectionTilesProps.types,
};

const defaultProps = {
    ...SectionTilesProps.defaults,
};

const LogosSection = (props) => {
    const {
        className,
        topOuterDivider,
        bottomOuterDivider,
        topDivider,
        bottomDivider,
        hasBgColor,
        invertColor,
        pushLeft,
        ...rest
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
        'team-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames('tiles-wrap reveal-from-bottom', pushLeft && 'push-left');

    const sectionHeader1 = {
        title: 'Nos Partenaires',
    };
    const sectionHeader = {
        paragraph: 'Voici nos partenaires officiels pour l’événement.',
    };

    return (
        <section {...rest} className={outerClasses}>
            <div className="container reveal-from-bottom" >
                <div className={innerClasses}>
                    <SectionHeader data={sectionHeader1} className="center-content reveal-from-bottom" />
                    <div className={tilesClasses}>
                        <Box
                            sx={{
                                overflow: 'hidden',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            <motion.div
                                animate={{ x: ['0%', '-100%'] }}
                                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                                style={{
                                    display: 'inline-flex',
                                    gap: '3rem',
                                }}
                            >
                                {[...logos, ...logos, ...logos, ...logos, ...logos, ...logos].map((logo, idx) => (
                                    <Box
                                        key={idx}
                                        component="img"
                                        src={logo}
                                        alt={`logo-${idx}`}
                                        sx={{
                                            height: { xs: 40, sm: 60 },
                                            width: 'auto',
                                            objectFit: 'contain',
                                            filter: 'grayscale(100%)',
                                            transition: 'filter 0.3s',
                                            '&:hover': {
                                                filter: 'grayscale(0%)',
                                            },
                                        }}
                                    />
                                ))}
                            </motion.div>
                        </Box>
                    </div>
                    <SectionHeader data={sectionHeader} className="center-content reveal-from-bottom" />
                </div>
            </div>
        </section>
    );
};

LogosSection.propTypes = propTypes;
LogosSection.defaultProps = defaultProps;

export default LogosSection;
