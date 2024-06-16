function encodeAndDecodeMessages() {
    let messageArea = document
        .querySelector('#main div:first-child textarea');
    let receivedMessageArea = document
        .querySelector('#main div:nth-child(2) textarea');
    let encodeBtn = document
        .querySelector('#main div:first-child button');
    let decodeBtn = document
        .querySelector('#main div:nth-child(2) button');

    encodeBtn.addEventListener('click',sendMessage);
    decodeBtn.addEventListener('click',decodeMessage);

    let message;

    function sendMessage() {
        message = messageArea.value;
        let encodedMessage = [];

        for (let char of message) {
            let newChar = String.fromCharCode(char.charCodeAt(0) + 1);
            encodedMessage.push(newChar);
        }

        encodedMessage = encodedMessage.join('');
        messageArea.value = '';
        receivedMessageArea.value = encodedMessage;
    }

    function decodeMessage() {
        receivedMessageArea.value = message;
    }
}
