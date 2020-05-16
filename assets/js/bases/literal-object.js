let character = {
    name: 'Megan Estefanie',
    codeName: 'Pastelito',
    alive: true,
    age: 20,
    coords: {
        latitude: 34.034,
        longitude: -118.70,
    },
    clothes: ['Pants', 'Shoes', 'Rings', 'Dress'],
    direction: {
        zip: '10880, 90265',
        location: 'Malibu, California',
    },
    'last-movie': 'Inifinity War',
};

console.log('Name:', character.name);
console.log(character);

console.log('Name:', character['name']);
console.log('Age:', character.age);
console.log('Coors:', character.coords);
console.log('Latitude:', character.coords.latitude);
console.log('No. clothes:', character.clothes.length);
console.log('Last clothes:', character.clothes[character.clothes.length - 1]);

const x = 'alive';
console.log('Alive:', character[x]);

console.log('Last movie:', character['last-movie']);

// More details

delete character.age;

console.log({character});

// new property
character.married = true;

const entriesPares = Object.entries(character);

console.log(entriesPares);

// Don't modify
Object.freeze(character);

const properties = Object.getOwnPropertyNames(character);
console.log(properties);

const values = Object.values(character);
console.log(values);