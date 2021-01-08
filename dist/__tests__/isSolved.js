const isSolved = require('../isSolved');

describe('isSolved', () => {
  it('пустые и полные колбы', () => {
    const data = [
      [],
      ['2', '2', '2'],
      [],
      ['4', '4', '4'],
    ];

    expect(isSolved(data)).toBe(true);
  });

  describe('цвет повторяется', () => {
    const dataArr = [
      [
        [],
        ['2', '2', '2' ],
        ['2', '2', '2' ],
        ['4', '4', '4'],
      ],
      [
      [],
        ['2', '2', '2' ],
        ['2' ],
        ['4', '4', '4'],
      ]
    ];

    dataArr.forEach((data, i) => {
      it (String(i), () => {
        expect(isSolved(data)).toBe(false)
      });
    });
  });

  describe('колба заполнена больше чем одним цветом', () => {
    const dataArr = [
      [
        [],
        ['2', '2', '2'],
        ['1', '3', '3'],
        ['4', '4', '4'],
      ],
      [
        [],
        ['2', '2', '2'],
        ['4', '3', '3'],
        ['4', '4', '4'],
      ],
      [
        [],
        ['2', '2', '2'],
        ['3', '3', '4'],
        ['4', '4', '4'],
      ],
    ];

    dataArr.forEach((data, i) =>
      it(String(i), () => {
        expect(isSolved(data)).toBe(false);
      })
    );
  });
});
