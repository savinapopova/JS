function extract(content) {
let text = document.getElementById('content').textContent;
let regex = /\([\w ]+\)/g;
let result = text.match(regex)
    .map(w => w.substring(1, w.length - 1))
    .join("; ");
return result;
}


