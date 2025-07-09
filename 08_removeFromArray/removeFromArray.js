function removeFromArray(array, ...args) {
    return array.filter((item) => !args.includes(item));
}

/*
function removeFromArray(){
    let argumentArray = Array.from(arguments);
    console.table(argumentArray)
    let trueArray = argumentArray[0];
    console.table(trueArray);
    let returnArray;
    
    for (let i = 1; i <= argumentArray.length; i++) {
        removeElement = argumentArray[i];
        console.log(removeElement);
        returnArray += trueArray.filter((item) => item !== removeElement);
        }

    return returnArray;
    }*/

//Do not edit below this line
module.exports = removeFromArray;
