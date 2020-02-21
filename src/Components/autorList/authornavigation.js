import React from "react";
// import "./styles.css";
import { Route, Link,  useParams,   useRouteMatch
} from "react-router-dom";

import AuthorList from "./autorlist/autorlist";
import SearchBar from "./searchBar/searchbar";


class FilterAuthor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filterText: "" };
  }

  handleFilterTextChange = filterText => {
    this.setState({ filterText: filterText });
  };

  render() {
    return (
      <div>
        <SearchBar
          handleFilterTextChange={this.handleFilterTextChange}
          filterText={this.state.filterText}
        />
        <AuthorList
          author={this.props.author}
          filterText={this.state.filterText}
          url={this.props.url}
        />
      </div>
    );
  }
}

function AuthorNavigation(props) {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <Route exact path={path}>
        <FilterAuthor author={props.author} url={url} />
      </Route>
      <Route path={`${path}/:id`}>
        <AboutAuthor author={props.author} />
      </Route>
    </div>
  );
}

function AboutAuthor(props) {
  let { id } = useParams();
  const index = props.author.findIndex(item => item.id === id);
  const data = props.author[index];
  return <p>{data.description}</p>;
}

export default AuthorNavigation;
