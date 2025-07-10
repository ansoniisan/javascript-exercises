const leapYears = function(year) {
    //if leap year, return true
    // leap year = if divisible by 4 && divisible by 100 && divisible by 400
    if (year % 4 === 0) {
        if (year % 100 === 0 && year % 400 === 0) {
            return true;
        }
        else if (year % 100 === 0) {
            return false
        }
        return true;
    }
    
    return false;
};

// Do not edit below this line
module.exports = leapYears;
