import React from "react";
import PropTypes from "prop-types";
import LinesEllipsis from "react-lines-ellipsis";
import "./Movie.css";

// class Movie extends Component {
//   static propTypes = {
//     title: PropTypes.string.isRequired,
//     poster: PropTypes.string.isRequired
//   };

//   render() {
//     return (
//       <div>
//         <MoviePoster poster={this.props.poster} />
//         <h1>{this.props.title}</h1>
//       </div>
//     );
//   }
// }

// class MoviePoster extends Component {
//   static propType = {
//     poster: PropType.string.isRequired
//   };
//   render() {
//     return <img src={this.props.poster} width="500" height="300" />;
//   }
// }

function Movie({ poster, title, genres, synopsis }) {
  return (
    <div className="Movie">
      <div className="Movie_Columns">
        <MoviePoster poster={poster} alt={title} />
      </div>
      <div className="Movie_Columns">
        <h1>{title}</h1>
        <div className="Movie_Genres">
          {genres.map((genres, index) => (
            <MoviesGenre genre={genres} key={index} />
          ))}
        </div>
        <div className="Movie_Synopsis">
          <LinesEllipsis
            text={synopsis}
            maxLine="3"
            ellipsis=" [...]"
            trimRight
            basedOn="letters"
          />
        </div>
      </div>
    </div>
  );
}

function MoviePoster({ poster, alt }) {
  return <img src={poster} alt={alt} title={alt} className="Movie_poster" />;
}

function MoviesGenre({ genre }) {
  return <span className="Movie_Genre">{genre}</span>;
}

Movie.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired
};

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

MoviesGenre.prototypes = {
  genre: PropTypes.string.isRequired
};

export default Movie;
