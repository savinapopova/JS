function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   function onClick() {
      let rows = Array.from(document.querySelectorAll("tbody tr"));
      let cells = Array.from(document.querySelectorAll("tbody tr td"));
      rows.filter(r => r.classList.contains("select"))
          .forEach(r => r.classList.remove("select"));

      let pattern = document.getElementById("searchField").value;

      cells
          .filter(c => c.textContent.includes(pattern))
          .forEach(c => c.parentElement.classList.add("select"));
   }
}
