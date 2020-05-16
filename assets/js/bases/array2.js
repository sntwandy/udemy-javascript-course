let games = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Length:', games.length);

let first = games[0];
let last = games[games.length - 1]; // Last element dynamics

console.log(`First element: ${first}`);
console.log(`Last element: ${last}`);

// Execute for each element inside the array
games.forEach((element, index, arr) => {
    console.log( {element, index, arr} );
});

// Insert a new element at the last array element
let newLength = games.push('F-Zero');
console.log({newLength, games});

// Insert a new element at start array
newLength = games.unshift('Fire Emblem');
console.log({newLength, games});

// Remove the last element
let gameDeleted = games.pop();
console.log( {gameDeleted,  games});

// Remove a element
let pos = 1;
let gamesDeleted = games.splice(pos, 2);
console.log( {gamesDeleted, games} );

// Looking index of an element
let metroidIndex = games.indexOf('Metroid');
console.log(metroidIndex);