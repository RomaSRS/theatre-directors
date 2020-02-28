import React, { PureComponent } from 'react';
import githubIcon from '../../Assets/Icons/Github.svg'
import telegramIcon from '../../Assets/Icons/Telegram.svg'

export default class Developer extends PureComponent {
  render() {
    const {
      developerData,
    } = this.props;

    return (
      <div className="developer">
        <p className="developer-name">{developerData.name}</p>
        <div
          className="developer-photo"
          style={
            {background:`linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(${developerData.image})`}
          }
          key={developerData.id}
        />
        <div className="social-links">
          <a className="github" href={developerData.github}>
            <img className="github-icon" src={githubIcon} alt="github" width="42" height="42" />
          </a>
          <a className="telegram" href={developerData.telegram}>
            <img className="telegram-icon" src={telegramIcon} alt="telegram" width="42" height="42" />
          </a>
        </div>
        <ul className="developer-contribution">
          {developerData.contribution.map((contribution, index) => {
            return (
              <li key={index}>{contribution}</li>
            );
          })}
        </ul>
      </div>
    );
  }
}
