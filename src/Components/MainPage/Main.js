import React from 'react';
import './Main.css';
import introductionImage from '../../Assets/Images/Introduction.jpg';
import bernardShowImage from '../../Assets/Images/GeorgeBernardShaw.jpg';
import jarkoPetanImage from '../../Assets/Images/JarkoPetan.jpg';
import theatreImage from '../../Assets/Images/Theatre.jpg';


function changeLink() {
    
    
}

function DirectorOfDay(props) {
    const currentDay = new Date();
    const weekDay = currentDay.getDay();
    const header = props.data.directorOfTheDay;
    const directorName = props.data.directors[weekDay].name;
    const birthDate = props.data.directors[weekDay].born;
    const deadDate = props.data.directors[weekDay].deceased;
    const description = props.data.directors[weekDay].description;
    const image = props.data.directors[weekDay].image;
    return <div className="directorOfDay">
                <div className="directorOfDay-container">
                    <h4>{header}</h4>
                    <a href={`list/${weekDay}`} onClick={() => changeLink()}>
                        <div className="directorOfDay-nameContainer">
                            <p className="directorDay-name">{directorName}</p>
                            <span>→</span>
                        </div>
                    </a>
                    <p className="directorDay-dates">{birthDate} - {deadDate}</p>
                    <p className="directorDay-description">{description}</p>
                </div>
                <img src={image} alt="Director of Day" width="236px" height="320px"></img>
            </div>
}

function Introduction(props) {
    const text = props.data.mainText;
    return <div className="introduction">
        <div className="introduction-text">{text}</div>
        <img src={introductionImage} alt="introductionImage" width='570' height='551'></img>
    </div>;
}

function Quotes(props) {
    const { firstQuote } = props.data;
    const { secondQuote } = props.data;
    return <div className="quotes">
        <div className="firstQuote">
            <img src={bernardShowImage} alt="Bernard Show" width='160' height='160'></img>
            <blockquote className="quote-wrapper">
                <q>{secondQuote.text}</q>
                <p>{secondQuote.author}</p>
            </blockquote>
        </div>
        <div className="secondQuote">
            <img src={jarkoPetanImage} alt="Jarko Petan" width='160' height='160'></img>
            <blockquote className="quote-wrapper">
                <q>{firstQuote.text}</q>
                <p>{firstQuote.author}</p>
            </blockquote>
        </div>
    </div>;
}

function History(props) {
    const text = props.data.addText;
    return <div className="history">
        <img src={theatreImage} alt="theatre" width='673' height='794'></img>
        <div className="history-text">{text}</div>
    </div>;
}


class MainPage extends React.Component {
    render() {
        const data = this.props.data;
        return <div className="main-page">
            <Introduction data={data} />
            <Quotes data={data} />
            <History data={data} />
            <DirectorOfDay data={data} />
        </div>
    }
}

export default MainPage;
