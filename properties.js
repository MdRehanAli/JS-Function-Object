var shoppingCart = {
    books: 5,
    sunglass: 1,
    keyboard: 3,
    mouse: 4,
    pen: 25
}

var p = Object.keys(shoppingCart);
console.log(p);

var val = Object.values(shoppingCart);
console.log(val);

var propertyName = 'pen';
shoppingCart[propertyName] = 89;
console.log(shoppingCart);
