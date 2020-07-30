import React from 'react';
import './Tile.css';

class Tile extends React.Component {

  render() {
    if (this.props.gameState === "WON" || this.props.gameState === "TIE" || this.props.value !== null) {
    	return <div className="tile">{this.props.value || '_'}</div>
    }
    return <button className="tile" onClick={this.props.makeMove}>{this.props.value || '_'}</button>
  }
}

export default Tile;
