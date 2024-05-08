function solve(data) {

    class Word {
        term;
        definition;
        constructor(term, definition) {
            this.term = term;
            this.definition = definition;
        }

        print() {
            console.log(`Term: ${this.term} => Definition: ${this.definition}`);
    }
    }

    data = data
        .map(d => JSON.parse(d));
    let dictionary = {};

    for (let datum of data) {
        let entries = Object.entries(datum);
        let term = entries[0][0];
        let definition = entries[0][1];
        if (dictionary.hasOwnProperty(term)) {
            let word = dictionary[term];
            word.definition = definition;
        } else {
            dictionary[term] = new Word(term, definition);
        }
    }

    Object.keys(dictionary)
        .sort((a, b) => a.localeCompare(b))
        .map(k => dictionary[k])
        .forEach(w => w.print());
}
