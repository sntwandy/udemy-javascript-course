class Person {

    static byObject( { name, lastName, country} ) {
        return new Person( name, lastName, country );
    }

    constructor(name, lastName, country) {
        this.name = name;
        this.lastName = lastName;
        this.country = country;
    };

    getInfo() {
        console.log(`info: ${this.name}, ${this.lastName}, ${this.country}`);
    };
};

const name1 = 'Megan',
        lastName1 = 'Herrera',
        country1 = 'DOM';

const megan = {
    name: 'Megan',
    lastName: 'Herrea',
    country: 'ITL'
}

const person1 = new Person(name1, lastName1, country1);
const perosn2 = Person.byObject(megan);

person1.getInfo();
perosn2.getInfo();