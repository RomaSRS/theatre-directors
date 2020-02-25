import React, { PureComponent } from 'react';
import Developer from './Developer';
import './DevelopersList.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

export default class DevelopersList extends PureComponent {
  render() {
    const {
      developers
    } = this.props;

    return (
      <ScrollAnimation animateIn='zoomIn'
  animateOut='bounce'>
      <div className="developers-list">
        {developers.map(developerData => {
          return (
            <Developer
              key={developerData.id}
              developerData={developerData}
            />
          );
        })}
      </div>
      </ScrollAnimation>
    );
  }
}
