// Display “Be Passionate” 39 times.
for (let i = 1; i <= 39; i++) {
    console.log(i, "Be Passionate");
}

// Display numbers between 58 to 98.
var i = 58;
while (i <= 98) {
    console.log(i);
    i++;
}

// Shaw all even numbers from 412 to 456.
for (let i = 412; i <= 456; i += 2) {
    console.log(i);
}

// Show all odd numbers 581 to 623.
for (let i = 581; i <= 623; i += 2) {
    console.log(i);
}

// Difference between while loop and for loop
// Declare an array for all the topics that you have learned last few days display then as output 

var arr = ['mango', 'jam', 'jackfruit', 'lichi', 'guava']

var arrLength = arr.length;
console.log(arrLength);

var element = arr[4];
console.log(element);

var index = arr.indexOf('jam');
console.log(index);

arr[1] = 'apple';
console.log(arr);

arr.pop();
console.log(arr);

arr.push('banana');
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift('mango');
console.log(arr);


// Create an array for all the mobile phones.Show all the elements of the array by using a while loop.

var mobilePhones = ['iPhone', 'Samsung', 'OnePlus', 'Oppo', 'Nokia', 'Symphony'];

for (let i = 0; i < mobilePhones.length; i++) {
    var phone = mobilePhones[i];
    console.log(phone);
}

// Run a loop from 30 to 86. This loop will stop if the values get higher than 44.

for (let i = 30; i <= 86; i++) {

    if (i > 44) {
        break;
    }
    console.log(i);
}


// Write the price of the books that you have.Display the prices if the prices are lower than 200.

var bookPrices = [190, 210, 230, 450, 170, 200, 250, 150];

for (let i = 0; i < bookPrices.length; i++) {
    const price = bookPrices[i];
    if (price >= 200) {
        continue;
    }
    console.log(price);
}


// Function Extra 
function fn() {
    console.log('Hello Js');
    console.log('How are you?');
}

fn();

function avg(n1, n2, n3, n4) {
    var add = n1 + n2 + n3 + n4;
    var average = add / 4;
    console.log(average);
}

avg(4, 5, 6, 7);


function avg2(n1, n2) {
    average = (n1 + n2) / 2;
    return average;
}

var aver = avg2(2, 3);
console.log('Average =', average);


// Objects Extra 

var students = {
    id: 115,
    name: 'Solaiman Khan',
    class: 9
}

console.log(students);


var obj = {
    id: 25,
    name: 'Ali',
    class: 16,
    batch: 23,
    department: 'CSE'
}

console.log(obj);

var keysObj = Object.keys(obj);
console.log(keysObj);

var valuesObj = Object.values(obj);
console.log(valuesObj);

var idValues = obj.id;
console.log(idValues);

var idValues = obj['class'];
console.log(idValues);

var idValues = 'class';
var idValue = obj[idValues];
console.log(idValue);


obj.id = 47;
console.log(obj);

obj['id'] = 49;
console.log(obj.id);

var newVal = 48;
obj['id'] = newVal;
console.log(obj);


for (let i = 0; i < keysObj.length; i++) {
    var key = keysObj[i];
    var val = obj[key];
    console.log(key, val);

}
