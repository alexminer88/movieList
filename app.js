var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];


var MovieItem = (props) => (
	
		<li>
			<div className="movie-list-entry">
				{props.movie.title}
			</div>
		</li>

)

var MovieList = (props) => (
	<ul>
		 {
		 	props.movies.map(movie => <MovieItem movie={movie} />)
		 }
	</ul>
)


var App = (props) => (
	<div>
		<h1 className="test">Movie List</h1>

			<MovieList movies={props.movies} />

	</div>
)



ReactDOM.render(<App movies={movies}/>, document.getElementById('app'))