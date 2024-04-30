function solve(count) {
    let pairs = [
        ['A', 'T'],
        ['C', 'G'],
        ['T', 'T'],
        ['A', 'G'],
        ['G', 'G']
    ];
    let patterns = [
        ['*', '*', 'L', 'L', '*', '*'],
        ['*', 'L', '-', '-', 'L', '*'],
        ['L', '-', '-', '-', '-', 'L'],
        ['*', 'L', '-', '-', 'L', '*']
    ];

    let pairsIndex = 0;
    let patternsIndex = 0;

    while (count-- > 0) {
        let currentPair = pairs[pairsIndex];
        let currentPattern = patterns[patternsIndex];
        let line = currentPattern.slice();
       setDNAPair(line, currentPair);
       printDNALine(line);
      pairsIndex = moveIndex(pairsIndex, pairs);
       patternsIndex = moveIndex(patternsIndex, patterns);

    }

    function setDNAPair(line, currentPair){
        let index = line.indexOf('L');
        line.splice(index, 1, currentPair[0]);
        index = line.indexOf('L');
        line.splice(index, 1, currentPair[1]);
        return line;
    }

    function printDNALine(line) {
        console.log(line.join(""));
    }

    function moveIndex(index, arr) {
        if (index === arr.length - 1) {
            return 0;
        }
          return index + 1;
    }
}
