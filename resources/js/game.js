import Tile from "./Tile";
import { allWords, theWords } from "./words";

export default {
    guessesAllowed: 5,
    theWord: theWords[Math.floor(Math.random() * theWords.length)],
    currentRowIndex: 0,
    state: "active",
    errors: false,
    message: "",

    letters: [
        "QWERTYUIOP".split(""),
        "ASDFGHJKL".split(""),
        ["Enter", ..."ZXCVBNM".split(""), "Backspace"],
    ],

    get currentRow() {
        return this.board[this.currentRowIndex];
    },

    get currentGuess() {
        return this.currentRow.map((tile) => tile.letter).join("");
    },

    get remainingGuesses() {
        return this.guessesAllowed - this.currentRowIndex - 1;
    },

    init() {
        this.board = Array.from({ length: this.guessesAllowed }, () => {
            return Array.from(
                { length: this.theWord.length },
                (item, index) => new Tile(index)
            );
        });
    },

    onKeyPress(key) {
        this.message = "";
        this.errors = false;

        if (/^[A-z]$/.test(key)) {
            this.fillTile(key);
        } else if (key === "Backspace") {
            this.emptyTile();
        } else if (key === "Enter") {
            this.submitGuess();
        }
    },

    fillTile(key) {
        for (let tile of this.currentRow) {
            if (!tile.letter) {
                tile.fill(key);

                break;
            }
        }
    },

    emptyTile() {
        for (let tile of [...this.currentRow].reverse()) {
            if (tile.letter) {
                tile.empty();

                break;
            }
        }
    },

    submitGuess() {
        if (this.currentGuess.length < this.theWord.length) {
            return;
        }

        if (!allWords.includes(this.currentGuess.toUpperCase())) {
            this.errors = true;
            this.message = "Invalid word...";

            return;
        }

        Tile.updateStatusesForRow(this.currentRow, this.theWord);

        if (this.currentGuess === this.theWord) {
            this.state = "complete";
            this.message = "You Win!";

            confetti();
        } else if (this.remainingGuesses === 0) {
            this.state = "complete";
            this.message = `Game Over. You Lose. (${this.theWord})`;
        } else {
            this.currentRowIndex++;
        }
    },

    matchingTileForKey(key) {
        return this.board
            .flat()
            .filter((tile) => tile.status)
            .sort((t1, t2) => t2.status === "correct")
            .find((tile) => tile.letter === key.toLowerCase());
    },
};
