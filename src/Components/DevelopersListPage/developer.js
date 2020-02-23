import React, { PureComponent } from 'react';
import githubIcon from '../../assets/icons/github.svg'
import telegramIcon from '../../assets/icons/telegram.svg'

export default class Developer extends PureComponent {
  render() {
    const {
      developerData,
    } = this.props;

    return (
      <div key={developerData.id} className="developer">
        <p className="developer-name">{developerData.name}</p>
        <img className="developer-photo" src={developerData.image} alt={developerData.name} />
        <div className="social-links">
          <a className="github" href={developerData.github}>
            <img className="github-icon" src={githubIcon} alt="github" width="42" height="42" />
          </a>
          <a className="telegram" href={developerData.telegram}>
            <img className="telegram-icon" src={telegramIcon} alt="telegram" width="42" height="42" />
          </a>
        </div>
        <p className="developer-contribution">{developerData.contribution}</p>
      </div>
    );
  }
}
