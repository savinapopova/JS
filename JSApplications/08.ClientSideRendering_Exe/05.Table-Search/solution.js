import {get} from "./request.js";
import {html, render} from "./node_modules/lit-html/lit-html.js";

await solve();

async function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   const url = 'http://localhost:3030/jsonstore/advanced/table';

   await loadData()

   async function loadData() {
      let students = await get(url);
      console.log(students);

      const rowTemplate = (student) => html`
         <tr>
            <td>${student.firstName} ${student.lastName}</td>
            <td>${student.email}</td>
            <td>${student.course}</td>
         </tr>
      `;

      const root = document.querySelector('tbody');

      render(Object.values(students).map(rowTemplate), root);

   }

   function onClick() {
      const rows = document.querySelectorAll('tr');
      const cells = document.querySelectorAll('td')
      const input = document.getElementById('searchField');
      Array.from(rows)
          .forEach(r => r.classList.remove('select'));

      let target = input.value.toLowerCase();
      Array.from(cells)
          .filter(c => c.textContent.toLowerCase().includes(target))
          .forEach(c => c.parentElement.classList.add('select'));
      input.value = '';


   }
}
