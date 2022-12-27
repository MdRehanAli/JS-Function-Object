const color = 'yellow';
if (color === 'green') {
    console.log('You are a Green friend.');
}
else if (color === 'blue') {
    console.log('You are a Blue friend.');
}
else if (color === 'red') {
    console.log('You are a Red friend');
}
else if (color === 'white') {
    console.log('You are a White friend.')
}
else if (color === 'yellow') {
    console.log('YOu are a Yellow friend.')
}
else {
    console.log('You are a Black friend')
}

// Now the same task works in switch loop 
switch (color) {
    case 'green':
        console.log('You are a Green friend.');
        break;
    case 'blue':
        console.log('You are a Blue friend.');
        break;
    case 'red':
        console.log('You are a Red friend.');
        break;
    case 'white':
        console.log('You are a White friend.');
        break;
    case 'yellow':
        console.log('You are a Yellow friend.');
        break;
    default:
        console.log('You are a Black friend.');
}
