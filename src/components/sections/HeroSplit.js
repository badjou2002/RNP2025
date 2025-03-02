import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

class HeroSplit extends React.Component {

  state = {
    videoModalActive: false
  }

  openVideoModal = (e) => {
    e.preventDefault();
    this.setState({ videoModalActive: true });
  }

  closeVideoModal = (e) => {
    e.preventDefault();
    this.setState({ videoModalActive: false });
  }

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      invertMobile,
      invertDesktop,
      alignTop,
      imageFill,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'hero section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && '',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'hero-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const splitClasses = classNames(
      'split-wrap',
      invertMobile && 'invert-mobile',
      invertDesktop && 'invert-desktop',
      alignTop && 'align-top'
    );

    return (
      <section
        {...props}
        className={outerClasses}
        style={{ marginTop: -105 }}
      >
        <div className="container">
          <div className="split-item">
            <div className="center-content">
              <h2 className="" style={{ fontSize: '25px' }}>
                Première Réunion Nationale des Présidents
              </h2>
              <p className="" style={{ marginTop:-15 ,}}>
                Première Réunion Nationale des Présidents 2025 - Jeune Chambre Internationale Tunisie
              </p>
              <ButtonGroup>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScI4yELiRiDv4ve4iMMV0md2rZlTKMQ4p82z5NnHw2hGSaB3Q/viewform?usp=dialog" className="button button-primary button-wide-mobile button-sm" onClick={this.closeMenu} target="_blank">S'inscrire</a>
              </ButtonGroup>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

HeroSplit.propTypes = propTypes;
HeroSplit.defaultProps = defaultProps;

export default HeroSplit;