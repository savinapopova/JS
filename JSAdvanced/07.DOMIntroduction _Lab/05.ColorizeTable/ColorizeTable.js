function colorize() {
    let rows = Array.from(document.getElementsByTagName('tr'));
    rows
        .filter((r,i) => i % 2 !== 0)
        .forEach(r => r.style.background = "teal");
}
