import Daemon from '../class/Daemon';

test('correct', () => {
    const uno = new Daemon('Daemon');
    const correct = {
        name: 'Daemon',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack:10,
        defence: 40,
      }
    expect(uno).toEqual(correct);

  }
);