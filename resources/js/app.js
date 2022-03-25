import game from './game';

document.addEventListener('alpine:init', () => {
    Alpine.data('game', () => game);
});
