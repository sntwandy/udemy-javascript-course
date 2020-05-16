const largestNum = (a, b) => (a > b) ? a : b;

const youHaveMembership = member => (member) ? '2 dollars' : '10 dollars';

console.log(largestNum(10, 20));
console.log(youHaveMembership(false));

const friend = true;
const friendArr = [
    'Darcy',
    'Zeus',
    friend ? 'Thor' : 'Loki',
];

console.log(friendArr);

const qualification = 88;
const grade = qualification >= 95 ? 'A+'
            : qualification >= 90 ? 'A'
            : qualification >= 85 ? 'B+'
            : qualification >= 80 ? 'B'
            : qualification >= 75 ? 'C+'
            : qualification >= 70 ? 'C'
            : qualification < 70 ? 'F'
            : 'Qualification wrong';

console.log({qualification, grade});