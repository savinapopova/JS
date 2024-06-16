function solve() {
  let sections = Array.from(document.querySelectorAll('section'));
  let result = document.getElementById('results');
  let correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  let answers = sections
      .map(s => Array.from(s.querySelectorAll('p')))
      .flat();
  answers
      .filter(a => correctAnswers.includes(a.textContent))
      .forEach(a => a.addEventListener('click', addPoint))
  answers
      .forEach(a => a.addEventListener('click', moveForward));


    let rightAnswers = 0;
    let sectionIndex = 0;

    function addPoint() {
        rightAnswers++;
    }

    function moveForward() {
        if (sectionIndex === 2) {
            // sections[sectionIndex].display = 'none';
            hideSection(sectionIndex);
            result.style.display = 'block';
            let output;
            if (rightAnswers === 3) {
                output = "You are recognized as top JavaScript fan!"
            } else {
                output = `You have ${rightAnswers} right answers`;
            }
            result.querySelector('h1').textContent = output;
            return;
        }

        hideSection(sectionIndex);
        sectionIndex++;
        showSection(sectionIndex);
    }

    function hideSection(sectionIndex) {
        // sections[sectionIndex].classList.remove('current');
        // sections[sectionIndex].classList.add('hidden');
        sections[sectionIndex].style.display = 'none';
    }

    function showSection(sectionIndex) {
        // sections[sectionIndex].classList.remove('hidden');
        // sections[sectionIndex].classList.add('current');
        sections[sectionIndex].style.display = 'block';
    }

}
