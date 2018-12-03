// var movies = [
//   {title: 'Mean Girls'},
//   {title: 'Hackers'},
//   {title: 'The Grey'},
//   {title: 'Sunshine'},
//   {title: 'Ex Machina'},
// ];
import MovieList from '/MovieList.js';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.movies = [
		  {title: 'Mean Girls'},
		  {title: 'Hackers'},
		  {title: 'The Grey'},
		  {title: 'Sunshine'},
		  {title: 'Ex Machina'},
		];
	}

	render () {
		return (
			// <div>
			// 	<Search />
			// <div>
			<MovieList movies={this.movies}/>
		)
	}
}


ReactDOM.render(<App />, document.getElementById('root'));
