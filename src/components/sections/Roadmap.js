import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Timeline from '../elements/Timeline';
import TimelineItem from '../elements/TimelineItem';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

class Roadmap extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'roadmap section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'roadmap-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const sectionHeader = {
      title: 'Chronologie RNP',
      paragraph: 'Chronologie de la Première Réunion Nationale des Présidents - JCI Tunisie.'
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses} >
            <SectionHeader data={sectionHeader} />
            <Timeline>
              <TimelineItem title={"18 Avril 2025T13h00"}>
                Ouverture et intronisation des présidents
              </TimelineItem>
              <TimelineItem title={"18 Avril 2025T15h00"}>
                Cocktail de bienvenue
              </TimelineItem>
              <TimelineItem title={"18 Avril 2025T16h00"}>
                Formation 'Compétition CYE'
              </TimelineItem>
              <TimelineItem title={"18 Avril 2025T15h00"}>
                Diner
              </TimelineItem>
              <TimelineItem title={"18 Avril 2025T15h00"}>
                Soirée compétition
              </TimelineItem>
              <TimelineItem title="19 Avril 2025T09h00">
                Formation et panels
              </TimelineItem>
              <TimelineItem title="19 Avril 2025T21h00">
                Ifrikiya village
              </TimelineItem>
              <TimelineItem title="20 Avril 2025T09h00">
                Réunion
              </TimelineItem>
              <TimelineItem title="20 Avril 2025T13h00">
                Checkout
              </TimelineItem>
            </Timeline>
          </div>
        </div>
      </section>
    );
  }
}

Roadmap.propTypes = propTypes;
Roadmap.defaultProps = defaultProps;

export default Roadmap;