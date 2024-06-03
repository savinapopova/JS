function solve(data) {
   let towns = [];
   data.shift();

    for (let element of data) {
        let tokens = element.split("|")
            .map(t => t.trim());
          tokens = tokens.slice(1, tokens.length - 1);
          let town = {
              Town: tokens[0],
              Latitude: parseFloat(Number(tokens[1]).toFixed(2)),
              Longitude: parseFloat(Number(tokens[2]).toFixed(2))
          };
          towns.push(town);
    }

    console.log(JSON.stringify(towns));
}
