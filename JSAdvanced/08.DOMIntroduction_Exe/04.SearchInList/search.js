function search() {
  let towns = Array
      .from(document.getElementById('towns')
          .children);
  towns.forEach(t => {
      t.style.fontWeight = '';
        t.style.textDecoration = '';
  });

  let pattern = document.getElementById("searchText").value;
  let matches = 0;
  let result = document.getElementById('result');

    for (let town of towns) {
        if (town.textContent.includes(pattern)) {
            town.style.fontWeight = 'bold';
            town.style.textDecoration = 'underline';
            matches++;
        }
    }
    result.textContent = `${matches} matches found`;
}
