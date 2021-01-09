module.exports = function (storage, moveDictionary) {
  const way = storage[storage.length - 1].way;
  const board = storage[storage.length - 1].board;

  storage[storage.length - 1].way = way.filter(move => {
    const fromStr = JSON.stringify(board[move.from]);
    const toStr = JSON.stringify(board[move.to]);
    let result = true;

    for (let i = 0; i < storage.length - 1; i++) {
      // если в way не существуют вхождения
      const fromExist = storage[i].way
        .findIndex(wayMove => wayMove.from === move.from);
      const toExist = fromExist !== -1 &&
        storage[i].way[fromExist].to === move.to;

      if (fromExist && toExist) continue;

      if (
        JSON.stringify(storage[i].board[move.from]) !== fromStr ||
        JSON.stringify(storage[i].board[move.to]) !== toStr
      ) continue;

      result = false;
      break;
    }

    if (
      storage[storage.length - 2] &&
      storage[storage.length - 2].currentMove.from === move.to &&
      storage[storage.length - 2].currentMove.to === move.from
    ) result = false;

    return result;
  })
}
