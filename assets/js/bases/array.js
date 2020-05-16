// const arr = new Array(10);
// const arr = [];

let videoGames = ['Mario 3', 'Megaman', 'Chrono Trigger'];

console.log({videoGames}); // Array[]

console.log(videoGames[0]) // 'Mario 3'

let arrayThings = [
    true,
    123,
    'Megan',
    1 + 2,
    function(){},
    ()=>{},
    {a:1},
    ['x','Megaman', 'Zero', 'Dr. Light', [
        'Dr. Willy',
        'Woodman',
    ] ]
];

//console.log({arrayThings});

console.log(arrayThings[7][4][1]);