import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import Modal from '../elements/Modal';

const styles = {
  videoContainer: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    zIndex: -1,
  },
  video: {
    width: "100%",
    height: "855px",
    objectFit: "cover",
  },
  overlay: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "20px",
    borderRadius: "10px",
  },
};

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

class HeroVideo extends React.Component {

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
      hasBgColor && 'has-bg-color',
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
      <div className={styles.videoContainer}>
        <a
          data-video="https://res.cloudinary.com/dhh8gu8oi/video/upload/v1740585212/AQPwlj6woaAKrmCQNuN1BXw5_uFbQ-OTX3QV5cE9frOQ7iUveGkCTz1IJruiyq6O8V_uy9CYxpsJnR34nj0s_eLb_hotx0l.mp4"
          href="#"
          aria-controls="video-modal"
          onClick={this.openVideoModal}
         

        >
          <video style={styles.video} src="https://res.cloudinary.com/dhh8gu8oi/video/upload/v1740585212/AQPwlj6woaAKrmCQNuN1BXw5_uFbQ-OTX3QV5cE9frOQ7iUveGkCTz1IJruiyq6O8V_uy9CYxpsJnR34nj0s_eLb_hotx0l.mp4" autoPlay loop muted playsInline  height='100vw' />
        </a>
        <Modal
          id="video-modal"
          show={this.state.videoModalActive}
          handleClose={this.closeVideoModal}
          video='https://res.cloudinary.com/dhh8gu8oi/video/upload/v1740585212/AQPwlj6woaAKrmCQNuN1BXw5_uFbQ-OTX3QV5cE9frOQ7iUveGkCTz1IJruiyq6O8V_uy9CYxpsJnR34nj0s_eLb_hotx0l.mp4'
        />
      </div >
    );
  }
}

HeroVideo.propTypes = propTypes;
HeroVideo.defaultProps = defaultProps;

export default HeroVideo;