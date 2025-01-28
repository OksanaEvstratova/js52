import Magician from '../class/Magician';

test('correct', () => {
    const uno = new Magician('Magician');
    const correct = {
        name: 'Magician',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
      }
    expect(uno).toEqual(correct);
  }
);