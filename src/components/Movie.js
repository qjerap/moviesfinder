import React from "react";

const Movie = props => {
  const mov = props.movie;

  if (props.movie) {
    var {
      poster_path,
      original_title,
      release_date,
      overview,
      tagline,
      imdb_id,
      budget,
      homepage,
      runtime,
      production_companies
    } = props.movie;
  }

  console.log(props.movie);

  return (
    <div className="movie">
      {mov && (
        <img
          className="movie__img"
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
        />
      )}
      {mov && (
        <div className="movie__details">
          <h1>{original_title}</h1>
          <div>
          {release_date && <h5>{release_date.slice(0, 4)}</h5>}
            
            {runtime && <h5>{runtime}mins</h5>}
            
          </div>
          {tagline && <blockquote>"{tagline}"</blockquote>}
          
          <p>{overview}</p>
          
            <a target="_blank" rel="noopener noreferrer" href={`https://www.imdb.com/title/${imdb_id}`}><i class="fab fa-imdb"></i></a>
          
        </div>
      )}
    </div>
  );
};

export default Movie;
