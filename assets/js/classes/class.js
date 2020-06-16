class Person {
    name = '';
    code = '';
    phrase = '';

    constructor(name = 'No name', code = 'No code', phrase = 'No phrase') {
        this.name = name;
        this.code = code;
        this.phrase = phrase;
    };
};

const darcy = new Person('Darcy', 'Spider', 'I am Darcy');
const zeus = new Person('Zeus', 'Iron', 'I am Zeus');

console.log(darcy);
console.log(zeus);