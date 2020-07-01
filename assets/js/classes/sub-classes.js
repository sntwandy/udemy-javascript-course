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

class Hero extends Person {

    constructor(name, code, phrase) {
        super(name, code, phrase);
        this.clan = 'Mommy'
    }

    clan = 'No clan';

    whoIam() {
        console.log(`hey, I am ${this.name}`);
        super.whoIam();
    }
};

const darcy = new Hero('Darcy', 'Bart', 'Darcy Bartolome');

console.log( darcy );
darcy.whoIam();