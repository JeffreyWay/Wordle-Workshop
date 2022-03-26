import game from "./game";
import "./bootstrap";

document.addEventListener("alpine:init", () => {
    Alpine.data("game", () => game);
});
