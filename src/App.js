import React, { Component } from "react";
import { API_URL, API_KEY } from "./config";
import "./App.css";
import HeroImage from "./components/HeroImage";
import SearchBar from "./components/SearchBar";
import Movies from "./components/Movies";

class App extends Component {
  state = {
    movies: [],
    heroImage: "",
    loading: false,
    currentPage: 0,
    totalPages: 0,
    searchTerm: ""
  };

  componentDidMount = () => {
    this.setState({
      loading: true
    });
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    this.loadData(endpoint);
  };

  loadMoreItems = () => {
    let endpoint = "";
    this.setState({ loading: true });
    if (this.state.searchTerm === "") {
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${this
        .state.currentPage + 1}`;
    } else {
      endpoint = `${API_URL}search/movie?api_key=${API_KEY}&query=${
        this.state.searchTerm
      }&language=en-US&page=${this.state.currentPage + 1}`;
    }
    this.loadData(endpoint);
  };

  searchItems = searchTerm => {
    this.setState({
      loading: true,
      movies: [],
      searchTerm
    });

    let endpoint;
    if (this.state.searchTerm === "") {
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    } else {
      endpoint = `${API_URL}search/movie?api_key=${API_KEY}&query=${searchTerm}`;
    }
    this.loadData(endpoint);
  };

  loadData = async endpoint => {
    const api_call = await fetch(endpoint);
    const data = await api_call.json();
    this.setState({
      movies: [...this.state.movies, ...data.results],
      heroImage: this.state.heroImage || data.results[0],
      loading: false,
      currentPage: data.page,
      totalPages: data.total_pages
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Movies App</h1>
        </header>
        {this.state.heroImage ? (
          <div className="heroImage">
            <HeroImage
              image={this.state.heroImage.backdrop_path}
              title={this.state.heroImage.original_title}
            />
            <SearchBar searchItems={this.searchItems} />
          </div>
        ) : null}
        <div className="result">
          <h1>
            {this.state.searchTerm === "" && !this.state.loading
              ? "Popular Movies"
              : "Search Results"}
          </h1>
        </div>
        <div className="container">
          <div className="row">
            {Object.keys(this.state.movies).map(key => (
              <Movies
                key={key}
                movie={this.state.movies[key]}
                movkey={key}
                clickable={true}
              />
            ))}
          </div>
        </div>
        <button onClick={this.loadMoreItems}>Load More</button>
      </div>
    );
  }
}

export default App;
