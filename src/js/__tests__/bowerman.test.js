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

    let unolevel = uno.level;
    let unoattack = uno.attack;
    let unodefence = uno.defence;

    uno.levelUp()
    expect(uno.level).toBe(unolevel += 1);
    expect(uno.attack).toBe(unoattack += unoattack*0.2);
    expect(uno.defence).toBe(unodefence += unodefence*0.2);
    

    uno.damage(70)
    expect(uno.health).toBe(51);

    uno.damage(140);  
    expect(uno.health).toBe(-47);

});



