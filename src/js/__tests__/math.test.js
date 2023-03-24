import CharacterMath from '../CharacterMath';

test('attack with dope', () => {
  const daemon = new CharacterMath('Daemon', 4, true, 40);
  expect(daemon.attack).toEqual(18);
});

test('attack without dope', () => {
  const magician = new CharacterMath('Magician', 3, false, 50);
  expect(magician.attack).toEqual(40);
});
