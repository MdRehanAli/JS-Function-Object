
var shoppingItems = ['books', 'sunglass', 'keyboard', 'mouse', 'pen'];

var friendsAge = [12, 45, 78, 12, 32, 14];
var friendsAge = {
    rahim: 12,
    samad: 45,
    karim: 78,
    jamal: 12,
    robi: 32,
    kazi: 14
}

var shoppingCart = {
    books: 5,
    sunglass: 1,
    keyboard: 3,
    mouse: 4,
    pen: 25,
    shoes: 2,
    bottle: 2
}

console.log(shoppingCart['sunglass']);

const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);

for(var i = 0; i < keys.length; i++){
    var keyNames = keys[i];
    var keyValues = shoppingCart[keyNames];
    console.log(keyNames, keyValues);
}

// for in loop 
for(var propertyName in shoppingCart){
    const value = shoppingCart[propertyName];
    console.log(propertyName, value);
}
