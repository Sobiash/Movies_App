import React from "react";
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE
} from "../config";
import Navigation from "./Navigation";
import "../styles/Movie.css";
import Spinner from "./Spinner";

class Movie extends React.Component {
  state = {
    loading: false,
    activeMovie: [],
    directors: [],
    actors: [],
    genres: []
  };

  componentDidMount = async () => {
    this.setState({ loading: true });
    const endpoint = `${API_URL}movie/${
      this.props.match.params.movieId
    }?api_key=${API_KEY}&langyage=en-US`;
    this.loadData(endpoint);
  };

  loadData = async endpoint => {
    const api_call = await fetch(endpoint);
    const data = await api_call.json();
    if (data.status_code) {
      this.setState({ loading: false });
    } else {
      this.setState(
        {
          activeMovie: data,
          genres: data.genres
        },
        async () => {
          const endpoint = `${API_URL}movie/${
            this.props.match.params.movieId
          }/credits?api_key=${API_KEY}`;
          const api_call = await fetch(endpoint);
          const data = await api_call.json();
          const directors = data.crew.filter(
            member => member.job === "Director"
          );
          this.setState({
            actors: data.cast,
            directors,
            loading: false
          });
        }
      );
    }
  };

  render() {
    const genres = this.state.genres;
    const genre = genres.map((genre, i) => {
      return <p key={i}>{genre.name}</p>;
    });

    const activeMovie = this.state.activeMovie;
    const director = this.state.directors.map((director, i) => {
      return <p key={i}>{director.name}</p>;
    });
    const actors = [...this.state.actors];
    const newActors = actors.slice(0, 4);
    const actor = newActors.map((actor, i) => {
      return <p key={i}>{actor.name}</p>;
    });

    return (
      <div>
        <div
          className="movieinfo"
          style={{
            background: activeMovie.backdrop_path
              ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${
                  activeMovie.backdrop_path
                }')`
              : "#000000"
          }}
        />
        <Navigation movieTitle={activeMovie.original_title} />
        {this.state.loading ? <Spinner /> : null}
        <div className="col-lg-8">
          <h2>MORE INFORMATION ABOUT {activeMovie.original_title}</h2>
          <div>
            <p>Release Date: {activeMovie.release_date}</p>
          </div>
          <div>
            <p>Duration: {activeMovie.runtime} minutes</p>
          </div>
          <p>{activeMovie.overview}</p>
          <div className="table-row">
            <div className="table-cell">
              <span>Original Title</span>
              <span>{activeMovie.original_title}</span>
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell">
              <span>Director:</span>
              <span>{director}</span>
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell">
              <span>Actors:</span>
              <span>{actor}</span>
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell">
              <span>Genre:</span>
              <span>{genre}</span>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <img
            style={{ height: "450px", width: "100%" }}
            src={
              activeMovie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${activeMovie.poster_path}`
                : "./images/no_image.jpg"
            }
            alt={activeMovie.title}
          />
        </div>
      </div>
    );
  }
}

export default Movie;
