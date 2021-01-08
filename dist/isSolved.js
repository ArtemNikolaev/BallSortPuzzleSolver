module.exports =  function isSolved(state) {
  const verify = {};

  return !state.some(stake => {
    if (stake.length === 0) { return false; }

    if (verify[stake[0]]) { return true; }
    else { verify[stake[0]] = true; }

    return stake.some(val => val !== stake[0]);
  });
}
