<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>TryCat</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="/css/app.css">

    <script src="//unpkg.com/alpinejs" defer></script>
    <script src="/js/app.js"></script>
</head>

<body>
    <main x-data="game"
          @keyup.window="onKeyPress($event.key)"
    >
        <header>
            <h1 aria-label="TryCat">
                <img src="/images/trycat-logo.svg" alt="">
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

        <div id="keyboard" @click.stop="$event.target.matches('button') && onKeyPress($event.target.textContent)">
            <template x-for="row in letters">
                <div class="row">
                    <template x-for="key in row">
                        <button
                            class="key"
                            :class="matchingTileForKey(key)?.status"
                            type="button"
                            x-text="key"></button>
                    </template>
                </div>
            </template>
        </div>
    </main>
</body>
</html>
