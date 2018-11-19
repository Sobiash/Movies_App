import React, { Component } from "react";
import { API_URL, API_KEY } from "./config";
import "./App.css";
import HeroImage from "./components/HeroImage";
import SearchBar from "./components/SearchBar";
import Movies from "./components/Movies";

class App extends Component {
  state = {
    movies: [],
    heroImage: null,
    heroImageTitle: "",
    loading: false,
    currentPage: 0,
    totalPages: 0,
    searchTerm: ""
  };

  componentDidMount = () => {
    this.setState({ loading: true });
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
      endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&page=${this
        .state.currentPage + 1}`;
    }
    this.loadData(endpoint);
  };

  searchItems = searchTerm => {
    let endpoint = "";
    this.setState({
      loading: true,
      movies: [],
      searchTerm
    });
    if (this.state.searchTerm === "") {
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    } else {
      endpoint = `${API_URL}seacrh/movie?api_key=${API_KEY}/search/${searchTerm}`;
    }
    this.loadData(endpoint);
  };

  loadData = async endpoint => {
    const api_call = await fetch(endpoint);
    const data = await api_call.json();
    this.setState({
      movies: [...this.state.movies, ...data.results],
      heroImage: this.state.heroImage || data.results[0].backdrop_path,
      heroImageTitle: data.results[0].original_title,
      loading: false,
      currentPage: data.page,
      totalPages: data.total_pages
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Movies Search</h1>
        </header>
        <div>
          <HeroImage
            image={this.state.heroImage}
            title={this.state.heroImageTitle}
          />
        </div>
        <SearchBar searchItems={this.searchItems} />
        <Movies />
      </div>
    );
  }
}

export default App;
