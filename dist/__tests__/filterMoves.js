const sut = require('../filterMoves');

describe('filterMoves', () => {
  it('1', () => {
    const storage = [
      {
        way: [{from: 0, to: 1}],
        board: [
          ['2','2'],
          ['2']
        ]
      },
      {
        way: [{from: 1, to: 0}],
        board: [
          ['2','2'],
          ['2']
        ]
      },
      {
        way: [
          {from: 0, to: 1},
          {from: 1, to: 0}
        ],
        board: [
          ['2','2'],
          ['2']
        ]
      }
    ];
    sut(storage);

    expect(storage[2].way.length).toEqual(0);
  });
});
