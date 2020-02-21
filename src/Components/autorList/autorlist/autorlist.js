import React from "react";
// import "./styles.css";
import { Link
} from "react-router-dom";


class Author extends React.Component {
  render() {
    return <li>{this.props.name}</li>;
  }
}

class AuthorList extends React.Component {
  render() {
    const rows = [];
    const objectAuter = this.props.author;
    const filterText = this.props.filterText.toLowerCase();
		const url = this.props.url;
    objectAuter.forEach(item => {
      const filter = item.name.toLowerCase() + item.placeOfBirth.toLowerCase();
      if (filter.indexOf(filterText) === -1) {
        return;
      }
      rows.push(
        <Link to={`${url}/${item.id}`} key={item.id}>
          <Author key={item.id} name={item.name} />
        </Link>
      );
    });
    return <ul>{rows}</ul>;
  }
}

export default AuthorList;

