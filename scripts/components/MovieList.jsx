import MovieListItem from 'MovieListItem.jsx'

console.log('hello');

var MovieList = (props) => {
	var mappedMovies = props.movies.map(movie => (<MovieListItem movie={movie}/>));
	return (
		<div className="movie-list"> {mappedMovies} </div>
	);
};

export default MovieList;