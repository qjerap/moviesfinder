import React from 'react'

const Movie = (props) => {


    const mov = props.movie;

    if(props.movie) {
        var {poster_path, original_title, release_date, overview, tagline, imdb_id, budget, homepage, runtime, production_companies} = props.movie
    };

    console.log(props.movie)

  return (
    <div className="movie">
    {mov && <img className="movie__img" src={`https://image.tmdb.org/t/p/original${poster_path}`}/>}
    {mov && <div className="movie__details">
            <h1>{original_title}</h1>
            {production_companies[0] && <h2>{production_companies[0].name}</h2>}
            
            <h2>{release_date.slice(0, 4)}</h2>
            /
            <blockquote>{tagline}</blockquote>
            /
            <h6>{overview}</h6>

            <button><a href={`https://www.imdb.com/title/${imdb_id}`}>imdb</a></button>
        </div>}



    
    </div>
    )
}

export default Movie

