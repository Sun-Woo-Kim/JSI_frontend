import React from "react";
import "./Movie.css";
import PropTypes from "prop-types";
import LinesEllipsis from "react-lines-ellipsis";

//import { Component } from "react";
// class Movie extends Component {
//   static propTypes = {
//     title: PropTypes.string.isRequired,
//     poster: PropTypes.string.isRequired
//   };

//   render() {
//     console.log(this.props);
//     return (
//       <div>
//         <MoviePoster poster={this.props.poster} />
//         <h1>{this.props.title}</h1>;
//       </div>
//     );
//   }
// }

// class MoviePoster extends Component {
//   static propTypes = {
//     poster: PropTypes.string
//   };

//   render() {
//     return <img src={this.props.poster} />;
//   }
// }

function Movie({ title, poster, genres, synopsis }) {
  return (
    <div className="Movie">
      <div className="Movie__Columns">
        <MoviePoster poster={poster} alt={title} />
      </div>

      <div className="Movie__Columns">
        <h1>{title}</h1>
        <div className="Movie__genres">
          {genres.map((genre, index) => (
            <MovieGenre genre={genre} key={index} />
          ))}
        </div>

        <p className="Movie__Synopsis">
          <LinesEllipsis
            text={synopsis}
            maxLine="3"
            ellipsis=" ..."
            trimRight
            baseOn="letters"
          />
        </p>
      </div>
    </div>
  );
}

function MoviePoster({ poster, alt }) {
  return <img src={poster} alt={alt} title={alt} className="Movie__Poster" />;
}

function MovieGenre({ genre }) {
  return <span className="Movie__Genre">{genre}</span>;
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  synopsis: PropTypes.string.isRequired
};
MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};
MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired
};

export default Movie;
