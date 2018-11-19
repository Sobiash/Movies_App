import React, { Component } from "react";
import { API_URL, API_KEY } from "./config";
import "./App.css";
import HeroImage from "./components/HeroImage";

class App extends Component {
  state = {
    movies: [],
    heroImage: null,
    heroImageTitle: "",
    heroImageText: "",
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
      endpoint = `${API_URL}search/movie/popular?api_key=${API_KEY}&language=en-US&page=${this
        .state.currentPage + 1}`;
    }
    this.loadData(endpoint);
  };

  loadData = async endpoint => {
    const api_call = await fetch(endpoint);
    const data = await api_call.json();
    this.setState({
      movies: [...this.state.movies, ...data.results],
      heroImage: data.results[0].backdrop_path,
      heroImageTitle: data.results[0].original_title,
      heroImageText: data.results[0].overview,
      loading: false,
      currentPage: data.page,
      totalPages: data.total_pages
    });
    console.log(this.state.heroImageTitle);
    console.log(this.state.heroImageText);
    console.log(this.state.heroImage);
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
            text={this.state.heroImageText}
          />
        </div>
      </div>
    );
  }
}

export default App;
