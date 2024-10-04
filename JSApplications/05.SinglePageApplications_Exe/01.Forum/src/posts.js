export async function showTopics() {
    let container = document.querySelector('.topic-container');

    let url = 'http://localhost:3030/jsonstore/collections/myboard/posts';

    try {
        let request = await fetch(url);
        if (!request.ok) {
            let error = await request.json();
            throw new Error(error.message);
        }
        let posts = await request.json();
        console.log(Object.values(posts));
        container.innerHTML = '';
        Object.values(posts)
            .reverse()
            .forEach(p => container.appendChild(createPost(p)));
    } catch (e) {
        return alert(e.message)};
}

function createPost(data) {

    let div = document.createElement('div');
    div.classList.add('topic-name-wrapper');
    div.dataset.id = data._id;
    let divInner = document.createElement('div');
    divInner.classList.add('topic-name');
    let a = document.createElement('a');
    a.href = '#';
    a.classList.add('normal');
    let h2 = document.createElement('h2');
    h2.textContent = data.title;
    a.appendChild(h2);
    let divMeta = document.createElement('div');
    divMeta.classList.add('columns');
    let divContent = document.createElement('div');
    divMeta.appendChild(divContent);
    let p = document.createElement('p');
    p.textContent = 'Date: ';
    let time = document.createElement('time');
    time.textContent = data.formattedDate;
    p.appendChild(time);
    divContent.appendChild(p);
    let divUser = document.createElement('div');
    divUser.classList.add('nick-name');
    let pUser = document.createElement('p');
    pUser.textContent = 'Username: ';
    let userSpan = document.createElement('span');
    userSpan.textContent = data.username;
    pUser.appendChild(userSpan);
    divUser.appendChild(pUser);
    divContent.appendChild(divUser);
    divInner.appendChild(divMeta);
    divInner.appendChild(a);
    div.appendChild(divInner);
    return div;

}

// let div = document.createElement('div');
// div.classList.add('comment');
// div.dataset.id = data._id;
// let header = document.createElement('div');
// header.classList.add('header');
// let img = document.createElement('img');
// img.src = './static/profile.png';
// img.alt = 'avatar';
// header.appendChild(img);
// let p = document.createElement('p');
// let span = document.createElement('span');
// span.textContent = data.username;
// let time = document.createElement('time');
// time.textContent = data.formattedDate;
// p.appendChild(span);
// p.textContent += ' posted on ';
// p.appendChild(time);
// header.appendChild(p);
// let comment = document.createElement('p');
// p.classList.add('post-content');
// comment.textContent = data.postText;
// header.appendChild(comment);
// div.appendChild(header);
// return div;
