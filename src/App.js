import React from 'react';
import './App.css';
import DirectorNavigation from "./Components/DirectorListPage/DirectorNavigation";
import Worklog from "./Components/WorklogPage/Worklog";
import DevelopersList from "./Components/DevelopersListPage/DevelopersList";
import MainPage from "./Components/MainPage/Main";
import VideoBlock from "./Components/VideoBlock/VideoBlock";
import configEN from "./Data/ConfigEN";
import configBY from "./Data/ConfigBY";
import configRU from "./Data/ConfigRU";
import SelectLang from "./Components/Navigation/Select/Select"


import {
	BrowserRouter as Router,
	NavLink,
	Route,
	Switch,
} from "react-router-dom";

class App extends React.Component {
	constructor(props) {
		super(props);
    	this.state = { lang: localStorage.getItem('Activelang') };
	};

	toggleLang = target => {
		this.setState({ lang: target.value });
	};

	render() {
		let { lang } = this.state;
		let data;
		if (lang === 'en') {
			data = configEN;
		} else if (lang === 'ru') {
			data = configRU;
		} else {
			data = configBY;
		}

		return (
			<div className="App">
				<Router>
					<div className="header">
						<div className="row-2">
							<h1 className="logo">{data.otherInfo.title}</h1>
							<ul className="navigation" onClick={this.getActive}>
								<div className="column-1">
									<NavLink exact  to="/">
										<li className="navagation-link">{data.homePageLink}</li>
									</NavLink>
									<NavLink exact to="/list">
										<li className="navagation-link">{data.directorsLink}</li>
									</NavLink>
									<NavLink exact to="/team">
										<li className="navagation-link">{data.developersLink}</li>
									</NavLink>
								</div>
								<div className="column-2">
									<SelectLang toggleLang={this.toggleLang} />
									<NavLink exact to="/style">
										<li className="navagation-link">{data.styleguideLink}</li>
									</NavLink>
									<NavLink exact to="/worklog">
										<li className="navagation-link">{data.worklogLink}</li>
									</NavLink>
								</div>
							</ul>
						</div>
					</div>

					<div className="main">
						<Switch>
							<Route exact path="/">
								<MainPage data={data} titles={data.directorPageTitles}/>
							</Route>
							<Route path="/list">
								<DirectorNavigation titles={data.directorPageTitles} author={data.directors} />
							</Route>
							<Route path="/team">
								<DevelopersList developers={data.developers} />
							</Route>
							<Route path="/style">
								<div>style</div>
							</Route>
							<Route path="/worklog">
								<Worklog developers={data.developers} />
							</Route>
						</Switch>
					</div>
				</Router>
			  <VideoBlock />
      </div>
		);
	}
}

export default App;