function printDeckOfCards(cards) {

    let result = [];

    for (let card of cards) {
        let tokens = card.split('');
        let suit = tokens.pop();
        let face = tokens.join('');

        try {
            let current = createCard(face, suit);
            result.push(current.toString());
        } catch (e) {
            console.log(`Invalid card: ${card}`);
            return;
        }
    }
    console.log(result.join(' '));

    function createCard(face, suit) {
        let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let suits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663'
        };

        if (!validFaces.includes(face) || !suits.hasOwnProperty(suit)) {
            throw new Error();
        }

        let card = {
            face,
            suit,
            toString() {
                return `${face}${suits[suit]}`
            }
        };

        return card;
    }
}

printDeckOfCards(['5S', '3D', 'QD', '1C'])
