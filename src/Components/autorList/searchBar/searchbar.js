import React from "react";
// import "./styles.css";

class SearchBar extends React.Component {
  handleFilterTextChange = e => {
    this.props.handleFilterTextChange(e.target.value);
  };
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
      </form>
    );
  }
}

export default SearchBar;
