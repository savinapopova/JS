import {showTopics} from './posts.js';

export async function createTopic(event) {
    event.preventDefault();

    let formData = new FormData(event.target);

    let data = Object.fromEntries(formData.entries());
    let title = data.topicName.trim();
    let username = data.username.trim();
    let postText = data.postText.trim();

    if (title === '' || username === '' || postText === '') {
        return alert('All fields are required!');
    }
    let date = new Date();
    let formattedDate = date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',  // Използваме 'short' за трибуквен месец
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    let url = 'http://localhost:3030/jsonstore/collections/myboard/posts';

    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, username, postText, formattedDate })
        });

        if (!response.ok) {
            let error = await response.json();
            throw new Error(error.message);
        }
        console.log(await response.json());
        event.target.reset();
        await showTopics();
    } catch (error) {
       return alert(error.message);
    }

}
