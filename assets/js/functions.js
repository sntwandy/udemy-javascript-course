function greeting(name) {
    console.log('Hello World! ' + name);
    return [1, 2, 3];
}

const greeting2 = function (name) {
    console.log('Hello World! 2 ' + name);
}

const greeting3 = (name) => console.log('Hello World! 3 ' + name)

greeting('Megan Estefanie');
greeting2('Darcy Bartolome');
greeting3('Zeus Amenadiel');

let returnValue = greeting();
console.log(returnValue);

function plus(a, b) {
    return a + b;
}

const plus2 = (a, b) => a + b;

function getAleatorio() {
    return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log(plus(2, 2));
console.log(plus2(5, 5));
console.log(getAleatorio());
console.log(getAleatorio2());