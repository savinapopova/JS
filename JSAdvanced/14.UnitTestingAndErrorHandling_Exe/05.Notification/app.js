function notify(message) {
  let div = document.getElementById('notification');

  div.textContent = message;
  div.style.display = 'block';
  div.addEventListener('click', hide);

  function hide() {
    div.style.display = 'none';
  }
}
