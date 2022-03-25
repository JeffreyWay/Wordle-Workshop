export default class Tile {
    letter = "";
    status = ""; // correct, present, absent

    constructor(position) {
        this.position = position;
    }

    static updateStatusesForRow(row, theWord) {
        theWord = theWord.split("");

        // check for correct letters...
        for (let tile of row) {
            if (theWord[tile.position] === tile.letter) {
                tile.status = "correct";

                theWord[tile.position] = null;
            }
        }

        // check for present letters...
        for (let tile of row.filter((tile) => !tile.status)) {
            if (theWord.includes(tile.letter)) {
                tile.status = "present";

                theWord[theWord.indexOf(tile.letter)] = null;
            }
        }

        // anything that remains is absent...
        for (let tile of row.filter((tile) => !tile.status)) {
            tile.status = "absent";
        }
    }

    fill(key) {
        this.letter = key.toLowerCase();
    }

    empty() {
        this.letter = "";
    }
}
