import React from 'react';
import './App.css';
import DirectorNavigation from "./Components/DirectorListPage/DirectorNavigation";
import Worklog from "./Components/WorklogPage/Worklog";
import Styleguide from "./Components/StyleguidePage/Styleguide";
import DevelopersList from "./Components/DevelopersListPage/DevelopersList";
import MainPage from "./Components/MainPage/Main";
import configEN from "./Data/ConfigEN";
import configBY from "./Data/ConfigBY";
import configRU from "./Data/ConfigRU";
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
		this.state = { lang: localStorage.getItem('Activelang') };
	};

	toggleLang = target => {
		this.setState({ lang: target.value });
	};

	getArrOfLink() {
		const columnOne = Array.from(document.body.querySelector('.column-1').children);
		const columnTwo = Array.from(document.body.querySelector('.column-2').children);
		const parent = [...columnOne, ...columnTwo];
		return parent;
	}

	componentDidMount() {
		const link = localStorage.getItem('ActiveLink');
		const parent = this.getArrOfLink();
		if (link) {
			for (let i = 0; i < parent.length; i++) {
				if (parent[i].classList.contains("active"))
					parent[i].classList.remove("active");
				if (parent[i].href === link) {
					parent[i].classList.add("active")
				}
			}
		}
	}

	getActive = event => {
		const target = event.target.closest('a');

		if (!target) {
			return;
		}

		const parent = this.getArrOfLink();
		for (let i = 0; i < parent.length; i++) {
			if (parent[i].classList.contains("active"))
				parent[i].classList.remove("active")
		}

		target.classList.add("active");
		localStorage.setItem('ActiveLink', target.href);
	}

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
									<Link className="active" to="/">
										<li>{data.homePageLink}</li>
									</Link>
									<Link to="/list">
										<li>{data.directorsLink}</li>
									</Link>
									<Link to="/team">
										<li>{data.developersLink}</li>
									</Link>
								</div>
								<div className="column-2">
									<SelectLang toggleLang={this.toggleLang} />
									<Link to="/style">
										<li>{data.styleguideLink}</li>
									</Link>
									<Link to="/worklog">
										<li>{data.worklogLink}</li>
									</Link>
								</div>
							</ul>
						</div>
					</div>

					<div className="main">
						<Switch>
							<Route exact path="/">
								<MainPage data={data}/>
							</Route>
							<Route path="/list">
								<DirectorNavigation author={data.directors} />
							</Route>
							<Route path="/team">
								<DevelopersList developers={data.developers} />
							</Route>
							<Route path="/style">
								<Styleguide
                  colorsData={data.colors}
                  navTitle={data.styleguideNav}/>
							</Route>
							<Route path="/worklog">
								<Worklog
                  developers={data.developers}
                  tasks={data.tasksData}/>
							</Route>
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
