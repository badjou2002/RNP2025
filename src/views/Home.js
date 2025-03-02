import React, { useState, useEffect } from 'react';
import HeroVideo from '../components/sections/HeroVideo';
import HeroSplit from '../components/sections/HeroSplit';
import Team from '../components/sections/Team/Team';
import Roadmap from '../components/sections/Roadmap';
import CountDown from '../components/sections/countdown/CountDown';
import { Box } from '@mui/material';
import Localisation from '../components/sections/Localisation';

const Home = () => {
  const [boxWidth, setBoxWidth] = useState("50vw");
  const [top, setTop] = useState("-250px");

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setBoxWidth("100vw");
        setTop("-350px");
      } else if (window.scrollY > 80) {
        setBoxWidth("90vw");
        setTop("-330px");
      } else if (window.scrollY > 60) {
        setBoxWidth("80vw");
        setTop("-310px");
      } else if (window.scrollY > 40) {
        setBoxWidth("70vw");
        setTop("-290px");
      } else if (window.scrollY > 20) {
        setBoxWidth("60vw");
        setTop("-270px");
      } else {
        setBoxWidth("50vw");
        setTop("-250px");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <React.Fragment>
      <div id="Accueil"></div>
      <HeroVideo hasBgColor invertColor />
      <div style={{ display: 'flex', alignItems: 'center', width: '100vw', justifyContent: 'center' }}>
        <Box
          className=""
          sx={{
            width: { md: boxWidth, xs: '97vw', sm: '97vw' },
            transition: "width 0.3s ease-in-out",
            marginTop: { xs: '-240px', sm: top },
            borderRadius: '20px',
            boxShadow: boxWidth !== '100vw' && '0px 2px 50px -20px rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(100px)',
            backgroundColor: 'rgb(255,255,255,0.2)',
            marginBottom: 3,
          }}
        >
          <HeroSplit hasBgColor invertColor />
          <div className='section-header reveal-from-bottom'>
            <CountDown />
          </div>
          <Localisation />
          <div id="Localisation"></div>
          <Team className="illustration-section-01" />
          <div id="Equipe"></div>
          {/* <Roadmap topOuterDivider />
          <div id="Chronologie"></div>*/}
        </Box>
      </div>
    </React.Fragment>
  );
};

export default Home;
