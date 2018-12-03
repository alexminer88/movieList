// // var movies = [
// //   {title: 'Mean Girls'},
// //   {title: 'Hackers'},
// //   {title: 'The Grey'},
// //   {title: 'Sunshine'},
// //   {title: 'Ex Machina'},
// // ];

// class App extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.movies = [
// 		  {title: 'Mean Girls'},
// 		  {title: 'Hackers'},
// 		  {title: 'The Grey'},
// 		  {title: 'Sunshine'},
// 		  {title: 'Ex Machina'},
// 		];
// 	}

// 	render () {
// 		return (
// 			<div>
// 				<Search />
// 			<div>
// 			<MovieList movies={this.movies}/>
// 		)
// 	};
// }

// var MovieList = (props) => {
// 	var mappedMovies = props.movies.map(movie => (<MovieListItem movie={movie}/>));
// 	return (
// 		<div className="movie-list"> {mappedMovies} </div>
// 	);
// };
	

// var MovieListItem = (props) => (
// 	<div className="movie-list-entry">{props.movie.title}</div>
// )

// class Search extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {value: ''};
// 		this.handleChange = this.handleChange.bind(this);
//     	this.handleClick = this.handleClick.bind(this);

// 	}

// 	handleChange(event) {
// 		this.setState({value: event.target.value});
// 	}


// 	render() {
// 		return (

// 			<input type="text" value={this.state.value}>
// 			<button>Search!</button>
// 		)
// 	}
// // }  

// ReactDOM.render(<App />, document.getElementById('root'));
