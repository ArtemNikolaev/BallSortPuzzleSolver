const isSolved = require('./isSolved');
const pathFinder = require('./pathFinder');
const makeMove = require('./makeMove');

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

  // @ts-ignore
  global.exeptions = Array(board.length);
  // @ts-ignore
  global.exeptions.forEach((el, i, ar) => ar[i] = []);

  const storage: State[] = [{
    board
  }];

  let counter = 0;

  while (!isSolved(storage[storage.length - 1].board)) {
    const lastIndex = storage.length - 1;
    const state = storage[lastIndex];

    state.way = pathFinder(state.board);
    makeMove(storage);

    console.log(++counter);
  }

  console.log(storage.map(
    el => el.currentMove
  ));
}
