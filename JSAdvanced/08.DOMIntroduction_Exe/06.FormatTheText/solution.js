function solve() {
  let sentences = document.getElementById("input")
      .value
      .split(".");
  sentences = sentences.filter(s => s.trim().length > 0);

  let counter = 0;

    let output = document.getElementById("output");
    let part = "";
    let paragraph = document.createElement("p");

    for (let i = 0; i < sentences.length; i++) {
        let sentence = sentences[i];

        part+= sentence;

            part+= ".";
            counter++;


        if (counter === 3 || i === sentences.length - 1) {
            counter = 0;
            paragraph.innerHTML = part;
            output.appendChild(paragraph);
            part = "";

            paragraph = document.createElement('p');

        }

    }
}
