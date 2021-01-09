module.exports = function makeMove(storage) {
  const lastState = storage[storage.length - 1];

  if (!lastState) {
    console.log('Решения не существует');
    process.exit();
  }

  if (!lastState.way.length) {
    console.log('pop happen');
    storage.pop();

    return makeMove(storage);
  }

  lastState.currentMove = lastState.way.pop();

  const newBoard = JSON.parse(JSON.stringify(lastState.board));

  newBoard[lastState.currentMove.to].push(
    newBoard[lastState.currentMove.from].pop()
  );

  storage.push({
    board: newBoard,
  })
}
