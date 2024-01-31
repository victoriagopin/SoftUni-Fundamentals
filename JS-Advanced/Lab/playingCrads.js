function deckOfCards(face, suit) {
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', ' A']
    const validSuits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663'
    }

    const isValidFace = validFaces.includes(face);
    const isValidSuit = Object.keys(validSuits).includes(suit);

    if (isValidFace && isValidSuit) {
        return {
            face,
            suit,
            toString() {
                console.log(`${face}${validSuits[suit]}`);
            }
        }
    } else {
        throw new Error('Error');
    }
}