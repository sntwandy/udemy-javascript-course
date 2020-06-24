class Person {
    // name = '';
    // code = '';
    // phrase = '';
    static _count = 0;
    static get counter() {
        return Person._count + ' instances';
    };

    static message() {
        console.log(this.name); // Undefined
        console.log('Hello everyone, I am a static method');
    }

    food = '';

    constructor(name = 'No name', code = 'No code', phrase = 'No phrase') {
        this.name = name;
        this.code = code;
        this.phrase = phrase;

        Person._count++;
    };

    set setFavoriteFood(food) {
        this.food = food.toUpperCase();
    };

    get getFavoriteFood() {
        return `Favorite food of ${this.name} is ${this.food}`;
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

console.log(zeus);

darcy.whoIam();
zeus.whoIam();

// darcy.myPhrase();
// zeus.myPhrase();

darcy.setFavoriteFood = 'Spaguetti';
console.log(darcy);

console.log(darcy.getFavoriteFood);

Person._count = 2;
console.log(`Static counter: ${Person._count}`);
console.log(Person.counter);

console.log(Person.message());