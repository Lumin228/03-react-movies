import css from './MovieGrid.module.css'
import Movie from '../../types/movie'

interface MovieGridInter {
    movies: Movie[],
    onSelect: () => void;
}

function MovieGrid({ movies, onSelect }: MovieGridInter) {
    
    return (
        <>
            <ul className={css.grid}>
                {movies.map(movie => {
                    return (
                        <li key={movie.id} >
                            <div className={css.card} id={movie.id} onClick={onSelect}>
                                <img
                                    className={css.image}
                                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path || movie.backdrop_path}`}
                                    alt={movie.original_title}
                                    loading="lazy"
                                />
                                <h2 className={css.title}>{movie.original_title}</h2>
                            </div>
                        </li>)
                })}

            </ul>
        </>
    )
}

export default MovieGrid