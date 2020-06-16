class Person {
    name = '';
    code = '';
    phrase = '';

    constructor(name = 'No name', code = 'No code', phrase = 'No phrase') {
        this.name = name;
        this.code = code;
        this.phrase = phrase;
    };

    whoIam() {
        console.log(`I am ${this.name} and my identity ${this.code}`);
    };

    myPhrase() {
        console.log(`${this.code} says: ${this.phrase}`);
    };
};

const darcy = new Person('Darcy', 'Spider', 'I am Darcy');
const zeus = new Person('Zeus', 'Iron', 'I am Zeus');

console.log(darcy);
console.log(zeus);

darcy.whoIam();
zeus.whoIam();

darcy.myPhrase();
zeus.myPhrase();