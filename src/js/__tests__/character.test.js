import Character from '../class/Character';

test('correct name', () => {
  expect(() => new Character('BowmanBowmanBowman')).toThrow(new Error("Некорректное имя"));
});

 test('correct type', () => {
  expect(() => new Character('Character')).toThrow(new Error("Некорректный тип"));
});


