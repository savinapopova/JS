function extractText() {
   let items = document.getElementById('items').children;
   let result = [];

    for (let item of items) {
        result.push(item.textContent);
    }

    let textArea = document.getElementById('result');
    textArea.value = result.join("\n");
}
