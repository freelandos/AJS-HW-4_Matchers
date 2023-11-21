import { getHeroHealthLevel } from '../hero';

test.each([
  ['healthy', { name: 'Маг', health: 90 }, 'healthy'],
  ['healthy', { name: 'Маг', health: 51 }, 'healthy'],
  ['wounded', { name: 'Маг', health: 50 }, 'wounded'],
  ['wounded', { name: 'Маг', health: 30 }, 'wounded'],
  ['wounded', { name: 'Маг', health: 15 }, 'wounded'],
  ['critical', { name: 'Маг', health: 14 }, 'critical'],
  ['critical', { name: 'Маг', health: 5 }, 'critical'],
])('testing getHeroHealthLevel function with %s level', (_, heroData, expected) => {
  const result = getHeroHealthLevel(heroData);
  expect(result).toBe(expected);
});
