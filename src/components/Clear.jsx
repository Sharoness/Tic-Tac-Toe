import React from 'react';

class Clear extends React.Component {

	render() {
		return <button onClick={this.props.newGame}>New round</button>
	}
}

export default Clear;
