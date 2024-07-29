function loadRepos() {

	let username = document.getElementById('username').value;
	let url = `https://api.github.com/users/${username}/repos`;
	let list = document.getElementById('repos');

	fetch(url)
		.then(response => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error(response.statusText);
			}
		})
		.then(onSuccess)
		.catch(onError);

	function onSuccess(data) {
	list.replaceChildren(...data.map(createElement));
	}

	function onError(error) {
		let li = document.createElement('li');
		li.textContent = error;
		list.replaceChildren(li);
	}

	function createElement(entry) {
		let li = document.createElement('li');
		let a = document.createElement('a');
		a.textContent = entry.full_name;
		a.href = entry.html_url;
		li.appendChild(a);
		return li;
	}
}
