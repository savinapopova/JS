export function hideSections() {
    Array.from(document.querySelectorAll('section'))
        .forEach(s => s.style.display = 'none');
}
