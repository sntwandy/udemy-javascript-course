function createPerson(name, lastName) {
    return { name, lastName, };
};

const createPerson2 = (name, lastName) => ({name, lastName});

const person = createPerson('Megan', 'Herrera');
const person2 = createPerson2('Darcy', 'Bastolome');

console.log(person);
console.log(person2);

function printArguments() {
    console.log(arguments);
}

const printArguments2 = (age, ...arguments) => {
    return arguments;
};

printArguments(10, true, false, 'Megan', 'Te amo');

const [married, alive, name, love] = printArguments2(10, true, false, 'Megan', 'Te amo');
console.log({married, alive, name, love});

// Desestructurar objetos
let megan = {
    name: 'Megan Estefanie',
    codeName: 'Pastelito',
    alive: true,
    age: 20,
    clothes: ['Pants', 'Shoes', 'Rings', 'Dress'],
};

const printProperties = ({name, codeName, alive, age = 15, clothes}) => {
    console.log({name});
    console.log({codeName});
    console.log({alive});
    console.log({age});
    console.log({clothes});
};

printProperties(megan);