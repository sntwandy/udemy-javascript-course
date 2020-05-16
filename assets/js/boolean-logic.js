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

const imUndefined = undefined;
const imNull = null;
const imFalse = false;

const a1 = true && 'Hello World!' && 150;
const a2 = 'Hello' && 'World!' && imFalse;

const a3 = imFalse || 'Im not false';
const a4 = imFalse || imUndefined || imNull || 'Im not false again!' || true;
const a5 = imFalse || imUndefined || returnTrue() || 'Im not false again!' || true;

console.log({a1, a2, a3, a4, a5});