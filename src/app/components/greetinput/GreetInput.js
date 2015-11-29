import React, { Component, PropTypes } from 'react';
import emptyFunction from 'fbjs/lib/emptyFunction';

export default class SearchInput extends Component {

	static propTypes = {
		onGreet: PropTypes.func
	}

	static defaultProps = {
		onGreet: emptyFunction
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit}>
				<input
					type='text'
					ref={c => this.input = c}
				/>

				<button type='submit'>Greet</button>
			</form>
		);
	}

	onFormSubmit = (evt) => {
		evt.preventDefault();
		this.props.onGreet(this.input.value)
	}

}
