import Zombie from '../class/Zombie';

test('correct', () => {
    const uno = new Zombie('Zombie');
    const correct = {
        name: 'Zombie',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
      }
    expect(uno).toEqual(correct);
  }
);