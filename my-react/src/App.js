import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
  state = {};

  componentWillMount() {
    console.log("====================================");
    console.log("Will Mount");
    console.log("====================================");
  }

  componentDidMount() {
    console.log("====================================");
    console.log("did Mount");
    console.log("====================================");
    // 모든 처리가 완료됨을 알게 됨.
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      console.log(movie);

      return (
        <Movie
          title={movie.title}
          poster={movie.medium_cover_image}
          key={movie.id}
          genres={movie.genres}
          synopsis={movie.synopsis}
        />
      );
    });
    return movies;
  };

  _getMovies = async () => {
    const movies = await this._callAPI();
    this.setState({
      movies
    });
  };

  _callAPI = () => {
    return fetch(
      "https://yts.lt/api/v2/list_movies.json?sort_by=download_count"
    )
      .then(response => response.json())
      .then(json => json.data.movies)
      .catch(error => console.log(error));
  };

  render() {
    // Component 가 존재함을 알게 됨.
    console.log("====================================");
    console.log("render");
    console.log("====================================");
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;
