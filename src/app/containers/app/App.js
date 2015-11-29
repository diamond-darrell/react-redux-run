import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import GreetInput from 'components/greetinput/GreetInput';
import GreetResult from 'components/greetresult/GreetResult';
import { greet } from 'ducks/helloWorld';

class App extends Component {

	static propTypes = {
    greetings: PropTypes.string
	}

	constructor(...args) {
		super(...args);

		this.onGreatInputEnter = this.onGreatInputEnter.bind(this);
	}

	render() {
		const { greetings } = this.props;

		return (
			<div>
				<GreetInput onGreet={this.onGreatInputEnter} />
				<GreetResult greetings={greetings} />
			</div>
		);
	}

  onGreatInputEnter(name) {
		this.props.dispatch(greet(name));
	}

}

const mapStateToProps = ({ helloWorld: { greetings } }) => ({ greetings });

export default connect(mapStateToProps)(App);
