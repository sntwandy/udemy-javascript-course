// Value
let a = 10;
let b = a;
a = 30;

//console.log(a ,b);

// Reference
let megan = {name: 'Megan'};
let meguita = {...megan};
meguita.name = 'Estefanie';

console.log(megan, meguita);

const changeName = ({...person}) => {
    person.name = 'Zeus';
    return person;
}

let Darcy = {name: 'Darcy'};
let Zeus = changeName(Darcy);

console.log(Darcy, Zeus);


// Arrays
const fruits = ['Apple', 'Pineapple', 'Pear'];

console.time('spread');
const otherFruits = [...fruits]; // fruits.slice()
console.timeEnd('spread');

otherFruits.push('Papaya');

console.log(fruits, otherFruits);