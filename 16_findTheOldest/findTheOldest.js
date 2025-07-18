const findTheOldest = function(arr) {
    const year = new Date().getFullYear();
    
    //Create new array and add age property to avoid mutating original array
    const orderedArray = arr
    .map((person) => ({
        ...person,
        age: (person.yearOfDeath || year) - person.yearOfBirth,
    }))
    .sort((a, b) => b.age - a.age);
    
    return orderedArray[0];
};

// Do not edit below this line
module.exports = findTheOldest;
