const cars = ['Tesla', 'Ferrari', 'Lamborghini', 'BMW', 'Mercedes'];

let i = 0;

/* while (i < cars.length) {
    console.log(cars[i]);
    i++;
} */

// False values
// undefined
// null
// false
console.warn('While');

while (cars[i]) {
    if (i === 1) {
    //    break;
        i++;
        continue;
    }
    console.log(cars[i]);
    i++;
}


console.warn('Do while');

let j = 0;
do {
    console.log(cars[j])
    j++;

} while (cars[j]);