import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import SearchResult from 'components/greetresult/GreetResult';

export default class GreetResult extends Component {

	static propTypes = {
    greetings: PropTypes.string.isRequired
	}

	static defaultProps = {
    greetings: ''
	}

	shouldComponentUpdate = (nextProps, nextState) => shallowCompare(this, nextProps, nextState)

	render() {
		const { greetings } = this.props;

    return (
      <h1>{greetings}</h1>
    );
	}

}
