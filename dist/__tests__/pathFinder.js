const sut = require('../pathFinder');

describe('pathFinder', () => {
  describe('пустая колба', () => {
    const input = [
      ['2'],
      ['3'],
      ['4'],
      []
    ];
    const output = [
      { from: 0, to: 3},
      { from: 1, to: 3},
      { from: 2, to: 3}
    ];

    const result = sut(input, 1);

    output.forEach((out, i) =>{
      it(String(i), () => {
        expect(result).toContainEqual(out);
      });
    });
  })

  it('пустая колба: edge case 1', () => {
    const input = [
      ['1', '1', '2','2'],
      ['1', '1', '2','2'],
      [],
    ];

    const result = sut(input, 1);

    expect(result).not.toContainEqual({from: 2, to: 2});
  })

  describe('неполная колба', () => {
    const input = [
      ['2'],
      ['3','4'],
      ['4', '2'],
      ['2']
    ];
    const output = [
      { from: 0, to: 3 },
      { from: 3, to: 0 },
      { from: 2, to: 0 },
      { from: 2, to: 3 },
    ];

    const result = sut(input, 2);

    output.forEach((out, i) =>{
      it(String(i), () => {
        expect(result).toContainEqual(out);
      });
    });
  })

  describe('нет ходов', () => {
    const input = [
      [
        ['2'],
        ['3','4'],
        ['4', '3']
      ],
      [
        ['2', '3'],
        ['2', '3']
      ]
    ];
    const out = [];

    input.forEach((input, index) => {
      const result = sut(input, 2);

      it(String(index), () => {
        expect(result).toEqual(out);
      });
    });
  })

});
