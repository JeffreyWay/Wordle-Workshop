<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>TryCat</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="{{ mix('css/app.css') }}">

    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script src="//unpkg.com/alpinejs" defer></script>
    <script src="{{ mix('js/app.js') }}"></script>
</head>

<body style="touch-action: pan-y">
    <main x-data="game"
          @keyup.window="onKeyPress($event.key)"
    >
        <div id="game-wrap">
            <header>
                <h1 aria-label="TryCat">
                    <a href="/">
                        <img id="logo" src="/images/trycat-logo.svg" alt="Cat with glasses and curly tail above the text TryCat.">
                    </a>
                </h1>

                <output x-text="message"></output>
            </header>

            <div id="game">
                <template x-for="(row, index) in board">
                    <div class="row"
                         :class="{'current' : currentRowIndex === index, 'invalid': currentRowIndex === index && errors }">
                        <template x-for="tile in row">
                            <div class="tile" :class="tile.status" x-text="tile.letter"></div>
                        </template>
                    </div>
                </template>
            </div>
        </div>

        <div id="keyboard" @click.stop="$event.target.closest('button') && onKeyPress($event.target.closest('button').dataset.key)">
            <template x-for="row in letters">
                <div class="row">
                    <template x-for="key in row">
                        <div>
                            <template x-if="key === 'Backspace'">
                                <button data-key="Backspace" class="key">
                                    <svg width="20" height="20" viewBox="0 0 24 24" style="display: flex">
                                        <path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"></path>
                                    </svg>
                                </button>
                            </template>

                            <template x-if="key !== 'Backspace'">
                                <button
                                    class="key"
                                    :class="matchingTileForKey(key)?.status"
                                    type="button"
                                    :data-key="key"
                                    x-text="key"
                                >
                                </button>
                            </template>
                        </div>
                    </template>
                </div>
            </template>
        </div>
    </main>
</body>
</html>
