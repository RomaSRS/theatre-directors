import React, { PureComponent } from 'react';
import Developer from './Developer.js';
import './DevelopersList.css';

export default class DevelopersList extends PureComponent {
  render() {
    const {
      developers
    } = this.props;

    return (
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
    );
  }
}
