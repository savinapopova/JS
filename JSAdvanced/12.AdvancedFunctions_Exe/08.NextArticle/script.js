function getArticleGenerator(articles) {
    let content = document.getElementById('content');
    let index = 0;
    let output = []
    function showNext() {
        if (index > articles.length - 1) {
            return;
        }

                let article = document.createElement('article');
                article.textContent = articles[index];
                content.appendChild(article);

        index++;
    }

    return showNext;
}
