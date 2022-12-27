function make_avg(num1, num2, num3) {
    var total = num1 + num2 + num3;
    var average = total / 3;
    return average;
}

var avg = make_avg(20, 30, 40);
console.log('Average =', avg);
