// function functionName(arg1, arg2) {
//     // function body
//     // return 
// }

// var returnedValue = functionName(arg1Value, arg2Value);

function getAverage(assignment1, assignment2, assignment3) {
    var total = assignment1 + assignment2 + assignment3;
    var average = total / 3;
    return average;
}

const assignment1Marks = 60;
const assignment2Marks = 58;
const assignment3Marks = 59;

var myAverage = getAverage(assignment1Marks, assignment2Marks, assignment3Marks);
console.log('my average marks:', myAverage);

// add two numbers 

function add(num1, num2) {
    var total = num1 + num2;
    return total;
}

var addition = add(50, 40);
console.log('Total =', addition);

// Average of three numbers 

function average(number1, number2, number3) {
    var total = number1 + number2 + number3;
    var average1 = total / 3;
    return average1;
}

const num1 = 40;
const num2 = 50;
const num3 = 60;

var average2 = average(num1, num2, num3);
console.log('Average = ', average2);
