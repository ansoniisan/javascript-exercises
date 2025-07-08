function repeatString(string, num) {
    if (num < 0) {
        return "ERROR";
    }

    let repeatedString = "";
    let i = 1;

    while (i <= num) {
        repeatedString += string;
        i++;
    }

    return repeatedString;
}

console.log(repeatString("hey", 3));
console.log(repeatString("hello", 10));
console.log(repeatString("hi", 1));
console.log(repeatString("bye", 0));
console.log(repeatString('goodbye', -1));

// Do not edit below this line
module.exports = repeatString;
