import React, { PureComponent } from 'react';
import {default as configEN} from '../../data/configEN.js';
import Developer from './developer.js';
import './developersList.css';

export default class DevelopersList extends PureComponent {
  render() {
    // const {
    //   lang,
    // } = this.props;

    return (
      <div className="developers-list">
        {configEN.developers.map((developerData) => {
          return (
            <Developer
              // lang={lang}
              developerData={developerData}
            />
          );
        })}
      </div>
    );
  }
}
