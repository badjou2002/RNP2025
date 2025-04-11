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
              <TimelineItem title={"18 Avril 2025T12h00"}>
                Acceuil et inscription
              </TimelineItem>
              <TimelineItem title={"18 Avril 2025T15h00"}>
                Académie d'entreprenariat
              </TimelineItem>
              <TimelineItem title={"18 Avril 2025T17h00"}>
                ProtocolMaster
              </TimelineItem>
              <TimelineItem title={"18 Avril 2025T19h00"}>
                Diner
              </TimelineItem>
              <TimelineItem title={"18 Avril 2025T21h00"}>
                Compétition CYE 1ére partie
              </TimelineItem>
              <TimelineItem title={"18 Avril 2025T22h00"}>
                JCI Trivia Battle – Le quiz ultime sur la JCI
              </TimelineItem>
              <TimelineItem title={"18 Avril 2025T21h30"}>
                Réunion BND
              </TimelineItem>
              <TimelineItem title={"18 Avril 2025T23h30"}>
                Réunion BNE
              </TimelineItem>
              <TimelineItem title="19 Avril 2025T06h00">
                Petit déjeuner
              </TimelineItem>
              <TimelineItem title="19 Avril 2025T09h00">
                Compétition CYE 2eme partie
              </TimelineItem>
              <TimelineItem title="19 Avril 2025T09h00">
                Community Action
              </TimelineItem>
              <TimelineItem title="19 Avril 2025T12h00">
                Déjeuner
              </TimelineItem>
              <TimelineItem title="19 Avril 2025T14h00">
                Céremonie d'ouverture
              </TimelineItem>
              <TimelineItem title="19 Avril 2025T17h00">
                Assemblée génerale - 1ére partie
              </TimelineItem>
              <TimelineItem title="19 Avril 2025T19h30">
                Diner
              </TimelineItem>
              <TimelineItem title="19 Avril 2025T21h30">
                Réunion avec les membres COC -congrés
              </TimelineItem>
              <TimelineItem title="19 Avril 2025T21h30">
                AFRICA VILLAGE
              </TimelineItem>
              <TimelineItem title="20 Avril 2025T06h00">
                Petit déjeuner
              </TimelineItem>
              <TimelineItem title="20 Avril 2025T09h00">
                Assemblée génerale - 2éme partie
              </TimelineItem>
              <TimelineItem title="20 Avril 2025T13h30">
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