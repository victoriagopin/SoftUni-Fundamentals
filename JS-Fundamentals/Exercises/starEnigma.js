// The war is at its peak, but you, young Padawan, can turn the tides with your programming skills. You are tasked to
// create a program to decrypt the messages of The Order and prevent the death of hundreds of lives.
// You will receive several messages, which are encrypted using the legendary star enigma. You should decrypt the
// messages, following these rules:
// To properly decrypt a message, you should count all the letters [s, t, a, r] – case insensitive and remove the count
// from the current ASCII value of each symbol of the encrypted message.
// After decryption:
// Each message should have a planet name, population, attack type ('A', as an attack or 'D', as destruction), and soldier
// count.
// The planet name starts after '@' and contains only letters from the Latin alphabet.
// The planet population starts after ':' and is an Integer;
// The attack type may be "A"(attack) or "D"(destruction) and must be surrounded by "!" (exclamation mark).
// The soldier count starts after "->" and should be an Integer.
// The order in the message should be: planet name -> planet population -> attack type -> soldier count. Each part can
// be separated from the others by any character except: '@', '-', '!', ':' and '>'.
// Input / Constraints
// • The first line holds n – the number of messages– integer in the range [1…100];
// • On the next n lines, you will be receiving encrypted messages.
// Output
// After decrypting all messages, you should print the decrypted information in the following format:
// First print the attacked planets, then the destroyed planets.
// "Attacked planets: {attackedPlanetsCount}"
// "-> {planetName}"
// "Destroyed planets: {destroyedPlanetsCount}"
// "-> {planetName}"
// The planets should be ordered by name alphabetically.

function starEnigma(arr) {
    let pattern = /[star]/gi;
    let decryptedMsgs = [];

    let msgsNum = Number(arr.shift());

    for (let i = 0; i < msgsNum; i++) {
        let curMsg = arr[i];

        let macthes = curMsg.match(pattern);
        let countToRemove = macthes.length;
        let decryptedMsg = [];

        if (macthes) {
            for (let char of curMsg) {
                let n = char.charCodeAt();
                let replacement = n - countToRemove;
                let newChar = String.fromCharCode(replacement);
                decryptedMsg.push(newChar);
            }
        } else {
            decryptedMsg = curMsg;
        }

        let word = decryptedMsg.join('');
        decryptedMsgs.push(word);
    }

    let attackedPlanets = [];
    let destroyedPlanets = [];

    let planetPattern = /@(?<name>[A-Z][a-z]+)[^@!\-:>]*:(?<population>\d+)[^@!\-:>]*!(?<attackType>[AD])![^@!\-:>]*->(?<soldierCount>\d+)/;

    for (let planet of decryptedMsgs) {
        let match = planet.match(planetPattern);

        if (match) {
            let { name, attackType } = match.groups;

            if (attackType == 'A') {
                attackedPlanets.push(name);
            } else {
                destroyedPlanets.push(name);
            }
        }


    }

    attackedPlanets.sort((a, b) => a.localeCompare(b));
    destroyedPlanets.sort((a, b) => a.localeCompare(b));
    console.log(`Attacked planets: ${attackedPlanets.length}`);
    for (let i = 0; i < attackedPlanets.length; i++) {
        console.log(`-> ${attackedPlanets[i]}`);
    }

    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    for (let i = 0; i < destroyedPlanets.length; i++) {
        console.log(`-> ${destroyedPlanets[i]}`);
    }
}

starEnigma(['3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR']);