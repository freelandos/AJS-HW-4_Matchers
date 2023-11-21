import { sortHeroesByHealth } from '../hero';

const heroList = [
  { name: 'Мечник', health: 10 },
  { name: 'Маг', health: 100 },
  { name: 'Лучник', health: 80 },
];

test('testing sortHeroesByHealth function', () => {
  const result = sortHeroesByHealth(heroList);
  expect(result).toEqual([
    { name: 'Маг', health: 100 },
    { name: 'Лучник', health: 80 },
    { name: 'Мечник', health: 10 },
  ]);
});
