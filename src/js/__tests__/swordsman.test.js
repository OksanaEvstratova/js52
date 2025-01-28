import Swordsman from '../class/Swordsman';

test('correct', () => {
  const uno = new Swordsman('Swordsman');
  const correct = {
    name: 'Swordsman',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
}
    expect(uno).toEqual(correct);
});