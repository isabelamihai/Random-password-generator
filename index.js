const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I",
    "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e",
    "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0",
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`",
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_",
    "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";",
    "<", ">", ".", "?","/"];

const genEl = document.getElementById("gen-el");
const passR1 = document.getElementById("pass-random1");
const passR2 = document.getElementById("pass-random2");

function getRandomCharacter() {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}

function generateRandomPass() {
    let password = "";
    for (let i = 0; i < 15; i++){
        password += getRandomCharacter();
    }
    return password;
}

genEl.addEventListener("click", function() {
passR1.textContent = generateRandomPass();
passR2.textContent = generateRandomPass();
});