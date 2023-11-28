export function getHeroHealthLevel(heroData) {
  if (heroData.health > 50) {
    return 'healthy';
  }
  if (heroData.health >= 15 && heroData.health <= 50) {
    return 'wounded';
  }

  return 'critical';
}

export function sortHeroesByHealth(heroesList) {
  return heroesList.sort((hero1, hero2) => hero2.health - hero1.health);
}
