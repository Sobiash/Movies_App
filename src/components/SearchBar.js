import React from "react";
import PropTypes from "prop-types";
import "../styles/SearchBar.css";

class SearchBar extends React.Component {
  state = {
    value: ""
  };

  static propTypes = {
    searchItems: PropTypes.func
  };

  timeout = null;

  search = e => {
    this.setState({
      value: e.target.value
    });
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.props.searchItems(this.state.value);
    }, 500);
  };

  render() {
    return (
      <div className="searchbar">
        <div className="searchbar-content">
          <form>
            <input
              type="text"
              name="movie"
              className="searchbar-input"
              placeholder="Search movies"
              onChange={this.search}
            />
            <button>Search</button>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
