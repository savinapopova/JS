function attachEvents() {
    let postsUrl =  'http://localhost:3030/jsonstore/blog/posts/';
    let commentsUrl =  'http://localhost:3030/jsonstore/blog/comments/';
    let postsSection = document.getElementById('posts');
    let commentsSection = document.getElementById('post-comments');

    let loadBtn = document.getElementById('btnLoadPosts');
    let viewBtn = document.getElementById('btnViewPost');
    loadBtn.addEventListener('click', loadPosts);

     async function loadPosts(event) {
         event.preventDefault();

         let response = await fetch(postsUrl);
         let data = await response.json();
         let posts = Object.values(data)
         console.log(posts);
         postsSection.innerHTML = '';

         posts.forEach(p => postsSection.appendChild(createOption(p)));

         viewBtn.addEventListener('click', viewPost);

         function viewPost(event) {
             event.preventDefault();
             createPost();
         }

         async function createPost() {
             let currentId = postsSection.value;
             console.log(currentId);
             let post = posts.find(p => p.id === currentId);
             console.log(post);
             let postTitle = document.getElementById('post-title');
             postTitle.textContent = post.title;
             let postBody = document.getElementById('post-body');
             postBody.textContent = post.body;

                let commentsResponse = await fetch(commentsUrl);
                let commentsData = await commentsResponse.json();
                let allComments = Object.values(commentsData);
                let comments = allComments.filter(c => c.postId === currentId);
                console.log(comments);
                commentsSection.innerHTML = '';
                comments.forEach(c => commentsSection.appendChild(createComment(c)))

                 }

     }

     function createComment(comment) {
         let li = document.createElement('li');
         li.id = comment.id;
         li.textContent = comment.text;
         return li;
     }


     function createOption(post) {
         let option = document.createElement('option');
         option.value = post.id;
         option.textContent = post.title;
         return option;
     }
}

attachEvents();
