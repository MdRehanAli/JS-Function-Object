function add(num1, num2) {
    console.log(num1, num2);
    var sum = num1 + num2;
    // console.log(sum);
    return sum;
}

// add(25, 30);

var total = add(25, 30);
console.log('total', total);

function bringSingara(money) {
    var singaraPrice = 10;
    var quantity = money / 10;
    return quantity;
}

var singaras = bringSingara(200);
console.log('Eating Singaras', singaras);

function buyPant(money) {
    var pantPrice = 500;
    var quantity = money / pantPrice;
    return quantity;
}

var pants = buyPant(2500);
console.log('pants', pants);