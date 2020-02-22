import React from 'react';
import './App.css';
import DirectorNavigation from "./Components/DirectorListPage/DirectorNavigation";
import Worklog from "./Components/WorklogPage/Worklog";
import DevelopersList from "./Components/DevelopersListPage/developersList";
import configEN from "./data/configEN";
import configBY from "./data/configBY";
import configRU from "./data/configRU";
import SelectLang from "./Components/Navigation/Select/Select"


import {
	BrowserRouter as Router,
	Link,
	Route,
	Switch,
} from "react-router-dom";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {lang: 'en'}
	};

	toggleLang = event => {
		this.setState({ lang: event.target.value });
	};

	getActive = event => {
		const target = event.target.closest('a');
		if(!target) {
			return;
		}
		const parent = Array.from(target.closest('ul').children);

		for( let i = 0; i < parent.length; i++) {
			if (parent[i].classList.contains("active"))
			parent[i].classList.remove("active")
		}

		target.classList.add("active")
	}

	render() {
		let {lang} = this.state;
		let data;
		if(lang === 'en') {
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
						<SelectLang toggleLang={this.toggleLang} />
						<div className="row-2">
							<h1 className="logo">{data.otherInfo.title}</h1>
							<ul className="navigation" onClick={this.getActive}>
								<Link className="active" to="/">
									<li>{data.homePageLink}</li>
								</Link>
								<Link to="/list">
									<li>{data.directorsLink}</li>
								</Link>
								<Link to="/team">
									<li>{data.developersLink}</li>
								</Link>
								<Link to="/style">
									<li>{data.styleguideLink}</li>
								</Link>
								<Link to="/worklog">
									<li>{data.worklogLink}</li>
								</Link>
							</ul>
						</div>
					</div>
					{/* В компоненте Switch выбираем нужный Route, вместо div вставляем свой компонент,
						в него в качестве пропса передаем data (пример: author={data.directors}, data - это конфиг, которыф передается с нужным языком)
					*/}
					<div className="main">
						<Switch>
							<Route exact path="/">
								<div>Desktop 1</div>
							</Route>
							<Route path="/list">
								<DirectorNavigation author={data.directors} />
							</Route>
							<Route path="/team">
								<DevelopersList developers={data.developers}/>
							</Route>
							<Route path="/style">
								<div>style</div>
							</Route>
							<Route path="/worklog">
								<Worklog developers={data.developers}/>
							</Route>
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
