export function getHeroHealthLevel(heroData) {
  let healthLevel = '';

  if (heroData.health > 50) {
    healthLevel = 'healthy';
  }
  if (heroData.health >= 15 && heroData.health <= 50) {
    healthLevel = 'wounded';
  }
  if (heroData.health < 15) {
    healthLevel = 'critical';
  }

  return healthLevel;
}

export function sortHeroesByHealth(heroesList) {
  const sortedHeroesList = heroesList.sort((hero1, hero2) => hero2.health - hero1.health);

  return sortedHeroesList;
}
