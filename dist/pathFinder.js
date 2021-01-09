function canBeMoved(stake, depth) {
  if (
    stake.length !== depth ||
    stake.some(el => el !== stake[0])
  ) return true

  return false;
}

module.exports = function (state, stakeDepth) {
  const result = [];
  const to = {};
  const from = {};

  {
    const emptyStakes = state.findIndex(stake => !stake.length);

    if (emptyStakes !== -1) {
      state.forEach((stake, from) => {
        if (stake.length && canBeMoved(stake, stakeDepth)) result.push(
          {
            from,
            to: emptyStakes,
          }
        )
      })
    }
  }

  state.forEach((stake, index) => {
    if (!stake.length) return;
    if (!canBeMoved(stake, stakeDepth)) return;

    const el = stake[stake.length-1];

    if (!from[el]) from[el] = [];

    from[el].push(index);

    if (stake.length < stakeDepth) {
      if (!to[el]) to[el] = [];

      to[el].push(index);
    }
  });

  Object.keys(to).forEach(value => {
    if (!from[value]) return;

    to[value].forEach(to => {
      from[value].forEach(from => {
        if (to !== from) result.push({ from, to });
      });
    });
  })

  return result.reverse();
}
