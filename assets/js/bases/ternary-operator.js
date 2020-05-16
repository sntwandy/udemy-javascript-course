/*
* We open at 11 on weekdays
* but at 9 on weekend
*/
// Enter to a website to confirm if is it open today...

const day = 0;
const actualHour = 10;

let openHour;
let message; // It is open, it is closed, today we open at xx hour

// if (day === 0 || day === 6)
// if ([0,6].includes(day)) {
//    console.log('It is on weekend! :)');
//    openHour = 9;
// } else {
//    console.log('It is on weekdays! :)');
//    openHour = 11;
// }


// if (actualHour >= openHour) {
    //    message = 'It is open!';
    // } else {
        //    message = `It is closed, today we open at ${openHour}`;
        // }
openHour = ([0,6].includes(day)) ? 9 : 11;
message = (actualHour >= openHour) ? 'It is Open! :)' : `It is closed! :(, we open at ${openHour}`;

console.log({openHour, message});