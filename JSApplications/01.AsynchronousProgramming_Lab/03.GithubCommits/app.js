async function loadCommits() {
    let username = document
        .getElementById('username')
        .value;
    let repo = document
        .getElementById('repo')
        .value;
    let url = `https://api.github.com/repos/${username}/${repo}/commits`;
    let list = document.getElementById('commits');

    try {
      let response = await fetch(url);
      if (response.status !== 200) {
          let li = document.createElement('li');
          li.textContent = `Error: ${response.status}`;
          list.replaceChildren(li);
          return;
      }
      let data = await response.json();
      console.log(response);

      list.replaceChildren(...data.map(createElement));
    } catch (error) {
        let li = document.createElement('li');
        li.textContent = `Error: ${error.status}`;
    }

    function createElement(entry) {
        let li = document.createElement('li');
        let name = entry.commit.author.name;
        let message = entry.commit.message;
        li.textContent = `${name}: ${message}`;
        return li;
    }

}
