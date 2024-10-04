import {createTopic} from './topic.js';
import {showTopics} from './posts.js';

await showTopics();

let form = document.querySelector('.container form');
form.addEventListener('submit',createTopic);
let cancelBtn = document.querySelector('.new-topic-buttons .cancel');
cancelBtn.addEventListener('click', (event) => {
    event.preventDefault();
    form.reset();
})
