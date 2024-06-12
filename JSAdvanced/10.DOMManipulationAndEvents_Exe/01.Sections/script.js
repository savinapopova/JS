function create(words) {
   let content = document.getElementById('content');

   for (let word of words) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = word;
      div.appendChild(p);
      content.appendChild(div);
      p.style.display = "none";
      div.addEventListener('click', showText);
   }

   function showText(event) {
      let div = event.target;
      let p = div.querySelector('p');
      p.style.display = 'block';
   }
}
