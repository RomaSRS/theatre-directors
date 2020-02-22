import React from "react";
import "./FilterDirector.css";
import { Route, useParams,   useRouteMatch
} from "react-router-dom";

import DirectorList from "./DirectorList/DirectorList";
import SearchBar from "./SearchBar/SearchBar";


class FilterDirector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filterText: "" };
  }

  handleFilterTextChange = filterText => {
    this.setState({ filterText: filterText });
  };

  render() {
    return (
      <div className="director-filter">
        <SearchBar
          handleFilterTextChange={this.handleFilterTextChange}
          filterText={this.state.filterText}
        />
        <DirectorList
          author={this.props.author}
          filterText={this.state.filterText}
          url={this.props.url}
        />
      </div>
    );
  }
}

function DirectorNavigation(props) {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <Route exact path={path}>
        <FilterDirector author={props.author} url={url} />
      </Route>
      <Route path={`${path}/:id`}>
        <AboutDirector author={props.author} />
      </Route>
    </div>
  );
}

function AboutDirector(props) {
  let { id } = useParams();
  const index = props.author.findIndex(item => item.id === id);
  const data = props.author[index];
  return <p>{data.description}</p>;
}

export default DirectorNavigation;
