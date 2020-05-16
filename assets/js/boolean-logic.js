const returnTrue = () => {
    console.log('Return true');
    return true;
}

const returnFalse = () => {
    console.log('Return false');
    return false;
}

console.warn('Not');
console.log(true);
console.log(!true);
console.log(!false);

console.log(!returnFalse());

console.warn('And');
console.log(true && true); // true
console.log(true && !false); // !false

console.log('==================');
console.log(returnFalse() && returnTrue()); // false
console.log(returnTrue() && returnFalse()); // false

console.log('======= && ========')
returnFalse() && returnTrue();

console.warn('OR'); // true one

console.log(true || false); // true
console.log(false || false); // false

console.log(returnTrue() || returnFalse()); // true

console.warn('Assignments');