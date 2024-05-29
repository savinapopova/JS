function solve(name, population, treasury) {
    let town = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes:
            () => town.treasury = Math.floor(town.treasury + town.population * town.taxRate),
        applyGrowth:
            (percentage) => town.population =  Math.floor(town.population + town.population * percentage / 100),
        applyRecession:
            (percentage) => town.treasury =  Math.floor(town.treasury - town.treasury * percentage / 100)
    };
    return town;
}
