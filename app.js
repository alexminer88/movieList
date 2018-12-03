

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

// create an input class 
	//this class will receive the state.movies array from App and update it according to user input. Will do nothing if movie is already there. May change data structure to a set
class Input extends React.Component {
	constructor(props) {
		super(props);
		this.state = {input: ''};
		this.currentInput = this.currentInput.bind(this);
	}

	currentInput(event) {
		this.setState({
			input: event.target.value;
		});

	}
		// here is where we will have to push to the movies array

	currentSubmit(event) {
		this.props....
	}

	render() {
		return (	
			<form onSubmit={this.currentSubmit} >
				<input placeholder="New Movie..." value={this.state.input} onChange={this.currentInput}>
			</form>
		)
	}
}

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {query: ''};
		this.handleInputChange = this.handleInputChange.bind(this)
	}

	handleInputChange(event) {
		
		this.setState({
     		query: event.target.value
   		});

   		this.props.handleSearchHandler(event);
   		
 	}

 	render() {
 		return (
 			<form>
       			<input placeholder="Search for..." value={this.state.query} onChange={this.handleInputChange} />
       			
     		</form>
 		)
 	}

}

class MovieItem extends React.Component {
	constructor(props) {
		super(props);

	}
	render () {
		return (
			<li>
				<div className="movie-list-entry">
					{this.props.movie.title}
				</div>
			</li>
		)
	}
}

var MovieList = (props) => (
	<ul>
		 {
		 	props.movies.filter(movie => movie.title.indexOf(props.query) >= 0).map(movie => <MovieItem movie={movie} />)
		 }
	</ul>
)




class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			query: '',
			movies: [
			  {title: 'Mean Girls'},
			  {title: 'Hackers'},
			  {title: 'The Grey'},
			  {title: 'Sunshine'},
			  {title: 'Ex Machina'},
			]
		};

		this.handleSearchHandler = this.handleSearchHandler.bind(this);
	}

	handleSearchHandler(event) {	
		console.log(event.target.value)	;
		this.setState({
     		query: event.target.value
   		});
 	}

	render() {
		return (
			<div>
				<h1 className="test">Movie List</h1>
				<Search query={this.state.query} handleSearchHandler={this.handleSearchHandler}/>
				<MovieList movies={this.state.movies} query={this.state.query}/>
 			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))

