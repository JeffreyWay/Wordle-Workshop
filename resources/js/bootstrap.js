// Fix the mobile Safari incorrect viewport height issue.
// We set the --vh CSS variable in the root app.js file.
// https://www.bram.us/2020/05/06/100vh-in-safari-on-ios/

let setVh = () => {
    let vh = window.innerHeight * 0.01;

    document.documentElement.style.setProperty("--vh", `${vh}px`);
};

window.addEventListener("load", setVh);
window.addEventListener("resize", setVh);

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("main").style.maxHeight =
        "calc(var(--vh, 1vh) * 94)";
});
