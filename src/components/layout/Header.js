import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Logo from './partials/Logo';

const propTypes = {
  active: PropTypes.bool,
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool
}

const defaultProps = {
  active: false,
  navPosition: 'fixed',
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false
}

class Header extends React.Component {
  state = {
    isActive: false,
    isScrolled: false, // état pour savoir si la page a été défilée
  };

  nav = React.createRef();
  hamburger = React.createRef();

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll); // Écoute de l'événement scroll
    this.props.active && this.openMenu();
    document.addEventListener('keydown', this.keyPress);
    document.addEventListener('click', this.clickOutside);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll); // Retirer l'écouteur de scroll
    document.removeEventListener('keydown', this.keyPress);
    document.removeEventListener('click', this.clickOutside);
    this.closeMenu();
  }

  handleScroll = () => {
    const scrolled = window.scrollY > 50; // Si on défile de 50px ou plus
    this.setState({ isScrolled: scrolled });
  };

  openMenu = () => {
    document.body.classList.add('off-nav-is-active');
    this.nav.current.style.maxHeight = this.nav.current.scrollHeight + 'px';
    this.setState({ isActive: true });
  }

  closeMenu = () => {
    document.body.classList.remove('off-nav-is-active');
    this.nav.current && (this.nav.current.style.maxHeight = null);
    this.setState({ isActive: false });
  }

  keyPress = (e) => {
    this.state.isActive && e.keyCode === 27 && this.closeMenu();
  }

  clickOutside = (e) => {
    if (!this.nav.current) return
    if (!this.state.isActive || this.nav.current.contains(e.target) || e.target === this.hamburger.current) return;
    this.closeMenu();
  }

  render() {
    const {
      className,
      active,
      navPosition,
      hideNav,
      hideSignin,
      bottomOuterDivider,
      bottomDivider,
      ...props
    } = this.props;

    const classes = classNames(
      'site-header',
      this.state.isScrolled && 'scrolled', // Ajoute la classe 'scrolled' si on défile
      bottomOuterDivider && 'has-bottom-divider',
      className
    );

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
      }
    };

    return (
      <header
        {...props}
        className={classes}
      >
        <div className="container">
          <div className={classNames('site-header-inner', bottomDivider && 'has-bottom-divider')}>
            {/* Logo avec filtre pour la couleur dynamique */}
            <img
              src={this.state.isScrolled ? 'https://res.cloudinary.com/dhh8gu8oi/image/upload/v1733774649/Untitled-4_zyc0ao.svg' : 'https://res.cloudinary.com/dhh8gu8oi/image/upload/v1740514523/Untitled-4_zyc0ao_gy2a2t.svg'}
              style={{
                width: '70px',
                cursor: 'pointer',
              }}
              alt="logo of sitemark"
              className={classNames('brand', this.state.isScrolled && 'scrolled')}
            />
            {!hideNav &&
              <React.Fragment>
                <button
                  ref={this.hamburger}
                  className="header-nav-toggle"
                  onClick={this.state.isActive ? this.closeMenu : this.openMenu}
                >
                  <span className="screen-reader">Menu</span>
                  <span className="hamburger">
                    <span className="hamburger-inner"></span>
                  </span>
                </button>
                <nav
                  ref={this.nav}
                  className={classNames('header-nav', this.state.isActive && 'is-active')}
                >
                  <div className="header-nav-inner">
                    <ul className={classNames('list-reset text-xs', navPosition && `header-nav-${navPosition}`)}>
                      <li>
                        <Link to="#Accueil" onClick={() => scrollToSection('Accueil')}>Accueil</Link>
                      </li>
                      <li>
                        <Link to="#Localisation" onClick={() => scrollToSection('Localisation')}>Localisation</Link>
                      </li>
                      <li>
                        <Link to="#Equipe" onClick={() => scrollToSection('Equipe')}>Equipe</Link>
                      </li>
                      {/* <li>
                        <Link to="#Chronologie" onClick={() => scrollToSection('Chronologie')}>Chronologie</Link>
                      </li>*/}
                    </ul>
                    {!hideSignin &&
                      <ul className="list-reset header-nav-right">
                        <li>
                          <a href="https://docs.google.com/forms/d/e/1FAIpQLScI4yELiRiDv4ve4iMMV0md2rZlTKMQ4p82z5NnHw2hGSaB3Q/viewform?usp=dialog"
                            className="button button-primary button-wide-mobile button-sm"
                            onClick={this.closeMenu} target="_blank" style={{ color: 'white' }}>S'inscrire</a>
                        </li>
                      </ul>}
                  </div>
                </nav>
              </React.Fragment>}
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
