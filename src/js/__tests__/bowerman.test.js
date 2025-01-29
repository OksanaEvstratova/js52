import Bowerman from '../class/Bowerman';

test('correct', () => {
  const uno = new Bowerman('Bowman');
  const correct = {
    name: 'Bowman',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
    }
    expect(uno).toEqual(correct);
});

test('correct health', () => {
  const deadMen = new Bowerman('Bowerman');
  deadMen.damage(1500);
  expect(() => deadMen.levelUp()).toThrow(new Error("Dead"));
});

test('levelUp', () => {
  const bowerman = new Bowerman('bowman');
  bowerman.levelUp();
  const result = {
    attack: 30, defence: 30, health: 100, level: 2, name: 'bowman', type: 'Bowman',
  };
  expect(bowerman).toEqual(result);
});

test('levelUp умершего', () => {
  expect(() => {
    const bowerman = new Bowerman('bowman');
    bowerman.health = 0;
    bowerman.levelUp();
  }).toThrow(new Error('Dead'));
});

test('damage', () => {
  const bowerman = new Bowerman('bowman');
  bowerman.damage(10);
  const result = {
    attack: 25, defence: 25, health: 92.5, level: 1, name: 'bowman', type: 'Bowman',
  };
  expect(bowerman).toEqual(result);
});

test('damage health is 0', () => {
  const bowerman = new Bowerman('bowman');
  bowerman.damage(150);
  const result = {
    attack: 25, defence: 25, health: 0, level: 1, name: 'bowman', type: 'Bowman',
  };
  expect(bowerman).toEqual(result);
});

test('damage health < 0', () => {
  const bowerman = new Bowerman('bowman');
  bowerman.health = -5;
  bowerman.damage(10);
  console.log(bowerman.health);
  const result = {
    attack: 25, defence: 25, health: -5, level: 1, name: 'bowman', type: 'Bowman',
  };
  expect(bowerman).toEqual(result);
});