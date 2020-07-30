import React from 'react';
import GameStatus from './GameStatus.jsx';
import Board from './Board.jsx';
import Clear from './Clear.jsx';

const EMPTY_BOARD = () => [
	[null, null, null],
	[null, null, null],
	[null, null, null]
]
const BOARD_SIZE = 3

function hasSomeoneWon(tiles){
	// Check horizontal
	for (let y = 0; y < BOARD_SIZE; y++){
		if (!tiles[y][0]){
			continue;
		}
		for (let x = 1; x < BOARD_SIZE; x++){
			const tile = tiles[y][x];
			if (tile !== tiles[y][0]){
				break;
			}
			if (x === BOARD_SIZE - 1){
				return true;
			}
		}
	}

	// check vertical
	for (let x = 0; x < BOARD_SIZE; x++){
		if (!tiles[0][x]){
			continue;
		}
		for (let y = 1; y < BOARD_SIZE; y++){
			const tile = tiles[y][x];
			if (tile !== tiles[0][x]){
				break;
			}
			if (y === BOARD_SIZE - 1){
				return true;
			}
		}
	}

	// check diagonal
	if (tiles[0][0]){
		for (let xy = 1; xy < BOARD_SIZE; xy++){
			if (tiles[xy][xy] !== tiles[0][0]) {
				break;
			}
			if (xy === BOARD_SIZE - 1){
				return true;
			}
		}
	}

	return false;
}


class Game extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			user: "X",
			gameState: "TURN",
			tiles: EMPTY_BOARD()
		}
		this.newGame = this.newGame.bind(this);
		this.makeMove = this.makeMove.bind(this);
	}

	newGame(){
		this.setState({
			tiles: EMPTY_BOARD(),
			gameState: "TURN"
		})
	}

	makeMove(x, y){
		this.setState(state => {
			let tiles = state.tiles
			tiles[x][y] = state.user;
			if (hasSomeoneWon(tiles)){
				return {
					gameState: "WON"
				}
			}
			return {
				user: state.user === "X" ? "O" : "X",
				tiles: tiles
			}
		})
	}

	render() {
		return <div>
			<GameStatus user={this.state.user} gameState={this.state.gameState}/>
			<Board tiles={this.state.tiles} gameState={this.state.gameState} makeMove={this.makeMove}/>
			{(this.state.gameState === "WON" || this.state.gameState === "TIE") && <Clear newGame={this.newGame}/>}
		</div>
	}
}

export default Game;
