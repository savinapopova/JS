function solve(sections) {
    const CONCRETE_PER_FOOT = 195;
    const CONCRETE_COST = 1900;
    let days = [];

    filterSections();

    while(sections.length > 0) {
        days.push(sections.length * CONCRETE_PER_FOOT);
        sections = sections.map(x => x + 1);
        filterSections();
    }
    let totalCost = days.reduce((a, b) => a + b, 0) * CONCRETE_COST;

    console.log(days.join(", "));
    console.log(totalCost + " pesos");
    function filterSections() {
        sections = sections.filter(x => x < 30);
    }
}
