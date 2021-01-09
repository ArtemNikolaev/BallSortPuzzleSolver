const isSolved = require('./isSolved');
const pathFinder = require('./pathFinder');
const makeMove = require('./makeMove');
const filterMoves = require('./filterMoves');

interface Move {
  from: Number,
  to: Number,
}

interface State {
  board: object[],
  way?: Move[],
  currentMove?: Move,
}

export default function solver(board, stakeDepth) {
  const storage: State[] = [{
    board
  }];
  const moveDictionary = [];

  let counter = 0;

  while (!isSolved(storage[storage.length - 1].board)) {
    // @ts-ignore
    const lastIndex = storage.length - 1;
    const state = storage[lastIndex];

    state.way = pathFinder(state.board, stakeDepth);
    filterMoves(storage, moveDictionary);
    makeMove(storage);

    console.log(++counter);
  }

  console.log(storage.map(
    el => el.currentMove
  ));
}
