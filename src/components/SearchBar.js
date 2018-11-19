import React from "react";
import "../styles/SearchBar.css";

class SearchBar extends React.Component {
  state = {
    value: ""
  };

  timeout = null;

  searchMovies = e => {
    this.setState({ value: e.target.value });

    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this.props.searchItems(this.state.value);
    }, 500);
  };
  render() {
    return (
      <div className="searchbar">
        <div className="searchbar-content">
          <input
            type="text"
            className="searchbar-input"
            placeholder="Search movies"
            value={this.state.value}
            onChange={this.searchMovies}
          />
          <span>Search</span>
        </div>
      </div>
    );
  }
}
export default SearchBar;
