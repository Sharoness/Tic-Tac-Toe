import React from 'react';
import './GameStatus.css';


class GameStatus extends React.Component {

  render() {
  	switch(this.props.gameState) {
  		case "WON":
  			return <p><span className="bold">{this.props.user}</span> won!</p>
  		case "TURN":
  			return <p><span className="bold">{this.props.user}</span>'s turn</p>
  		case "TIE":
  			return <p>It's a tie!</p>
  		default:
  			return <p>error</p>
  	}
  }
}

export default GameStatus;
