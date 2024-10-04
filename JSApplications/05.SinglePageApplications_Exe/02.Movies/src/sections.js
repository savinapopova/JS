export function hideSections() {
    const sections = document.querySelectorAll('section');
    Array.from(sections)
        .forEach(s => s.style.display = 'none');
}

export function showSection(id) {
    document.getElementById(id)
        .style.display = 'block';
    console.log(document.getElementById(id));
}
