/* const palindromes = function (string) {
    // A car, a man, a maraca.
    let originalArray = string.split("");
    //A  c a r ,  a  m a n ,  a  m a r a c a.
    originalArray.reverse();
    //r a c e c a r
    originalArray.reverse()
    let newString = originalArray.join("");
    //racecar
    if (newString === string) {
        return true;
    }
    return false;
}; */

/* const palindromes = function (string) {
    //r3ace3car
    let lowerCaseString = string.toLowerCase();
    //r3ace3car
    let stringArray = lowerCaseString.split("");
    //["r", "3", "a", "c", "e", "3", "c", "a", "r"]
    console.log(stringArray);
    let stringArrayOnlyLetters = stringArray.filter((item) => {
        if (item.toLowerCase() !== item.toUpperCase() || typeof +item === "number") {
            return true
        };
    });
    console.log(stringArrayOnlyLetters);
    // ["r", "3", "a", "c", "e", "3", "c", "a", "r"]
    let stringArrayOnlyLettersCopy = stringArrayOnlyLetters.slice();
    // ["r", "3", "a", "c", "e", "3", "c", "a", "r"]
    let stringArrayOnlyLettersCopyWord = stringArrayOnlyLettersCopy.join("");
    //r3ace3car
    stringArrayOnlyLetters.reverse();
    // ["r", "a", "c", "3", "e", "c", "a"];
    let stringArrayOnlyLettersWord = stringArrayOnlyLetters.join("");
    console.log(stringArrayOnlyLettersCopyWord);
    console.log(stringArrayOnlyLettersWord);
    //racecar
    if (stringArrayOnlyLettersCopyWord === stringArrayOnlyLettersWord) {
        return true;
    }
    return false;
}; */

const palindromes = function (string) {
    const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";
    const alphanumericalArray = alphanumerical.split("");

    let lowerString = string.toLowerCase();
    const stringToArray = lowerString.split("");
    const filteredStringToArray = stringToArray.filter((item) => alphanumericalArray.includes(item));

    const unreversedArray = filteredStringToArray.slice();
    const unreversedArrayString = unreversedArray.join("");

    const reversedArray = filteredStringToArray.reverse();
    const reversedArrayString = reversedArray.join("");

    return unreversedArrayString === reversedArrayString;
}

// Do not edit below this line
module.exports = palindromes;

//filter out non-alphanumerical chars
//reverse it
//join it
//compare