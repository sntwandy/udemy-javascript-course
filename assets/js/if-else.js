let a = 5;

if (a >= 10) {
    console.log(`A: ${a} is >= 10`);
} else {
    console.log(`A: ${a} is < 10`);
}

// console.log(`End the App.`);

const today = new Date(); // Instance object date
let day = today.getDay(); // 0: Sunday, 1: Monday, 2: Tuesday ...

console.log(day);

if (day === 0) {
    console.log('It is Sunday');
} else {
    console.log('It is not Sunday');
}

const lettersDay = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
};

console.log(lettersDay[6] || 'Day is not correct');