function reverseString(string) {
    return string
    .split("")
    .reverse()
    .join("")
}

console.log(reverseString("hello"));
console.log(reverseString('123! abc! Hello, Odinite.'));
console.log(reverseString(""));

// Do not edit below this line
module.exports = reverseString;
