import React from 'react';
import Tile from './Tile.jsx';
import './Board.css';

class Board extends React.Component {

  render() {
    return <div className="grid-container">
    <Tile value={this.props.tiles[0][0]} gameState={this.props.gameState} makeMove={() => {this.props.makeMove(0, 0)}}/>
    <Tile value={this.props.tiles[0][1]} gameState={this.props.gameState} makeMove={() => {this.props.makeMove(0, 1)}}/>
    <Tile value={this.props.tiles[0][2]} gameState={this.props.gameState} makeMove={() => {this.props.makeMove(0, 2)}}/>
    <Tile value={this.props.tiles[1][0]} gameState={this.props.gameState} makeMove={() => {this.props.makeMove(1, 0)}}/>
    <Tile value={this.props.tiles[1][1]} gameState={this.props.gameState} makeMove={() => {this.props.makeMove(1, 1)}}/>
    <Tile value={this.props.tiles[1][2]} gameState={this.props.gameState} makeMove={() => {this.props.makeMove(1, 2)}}/>
    <Tile value={this.props.tiles[2][0]} gameState={this.props.gameState} makeMove={() => {this.props.makeMove(2, 0)}}/>
    <Tile value={this.props.tiles[2][1]} gameState={this.props.gameState} makeMove={() => {this.props.makeMove(2, 1)}}/>
    <Tile value={this.props.tiles[2][2]} gameState={this.props.gameState} makeMove={() => {this.props.makeMove(2, 2)}}/>
    </div>
  }
}

export default Board;
