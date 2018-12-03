
class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};
		this.handleChange = this.handleChange.bind(this);
    	this.handleClick = this.handleClick.bind(this);

	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}


	render() {
		return (

			<input type="text" value={this.state.value} onChange = {this.handleChange}>
			<button>Search!</button>
		)
	}
}

export default Search