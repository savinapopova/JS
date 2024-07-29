function loadRepos() {

    let resultDiv = document.getElementById('res');

    let url = 'https://api.github.com/users/testnakov/repos';
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            resultDiv.textContent = xhr.responseText;
        } else {
            resultDiv.textContent = 'Error';
        }
    }

    xhr.open('GET', url);
    xhr.send();
}
