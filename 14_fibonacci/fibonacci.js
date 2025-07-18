const fibonacci = function(member) {
    //make an empty array to store the members
    let fibonacci = [];
    member = +member;

    if (member === 0) {
        return 0;
    }
    if (member < 0) {
        return "OOPS";
    }

    //Push the first member, 1
    let firstInitial = 1;
    fibonacci.push(firstInitial);
    fibonacci.push(firstInitial);

    //fibonacci = [1]

    //Create for loop to add new members
    for (let i = 2; i < member; i++) {
        //I don't know what to do in the loop
        fibonacci[i] = fibonacci[i-2] + fibonacci[i-1];  
    }
    
    return fibonacci[member - 1];
}

// Do not edit below this line
module.exports = fibonacci;


/* Add previous two numbers together, store in array and return */