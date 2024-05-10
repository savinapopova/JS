function solve(data) {
    let countries = {};

    for (let element of data) {
      let [country, town, cost] = element.split(" > ");
      cost = Number(cost);
      if (countries.hasOwnProperty(country) &&
      countries[country].hasOwnProperty(town)) {
          if (countries[country][town] > cost) {
              countries[country][town] = cost;
          }
              continue;
      }

      if (!countries.hasOwnProperty(country)) {
          countries[country] = {};
      }
      countries[country][town] = cost;

    }


    for (let country in countries) {
        let offers = Object.entries(countries[country])
            .sort((a, b) =>
                a[1] - b[1])
                .map(e => e.join(" -> "))
                .join(" ");
            countries[country] = offers;

    }

    Object.entries(countries)
        .sort(([name1], [name2]) => name1.localeCompare(name2))
        .forEach(e => console.log(e[0], "->", e[1]));


}
