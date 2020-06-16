const meg = {
    name: 'Megan E.',
    age: 20,
    print() {
        console.log(`Name: ${this.name}, age: ${this.age}`);
    },
};

const wan = {
    name: 'Wandy R.',
    age: 22,
    print() {
        console.log(`Name: ${this.name}, age: ${this.age}`);
    },
};

// meg.print();
// wan.print();

// before ECMAScript 6

function Person (name, age) {
    this.name = name;
    this.age = age;

    this.print = function () {
        console.log(`Name: ${this.name}, age: ${this.age}`);
    }
};

const megan = new Person('Megan', 20);
console.log(megan);
megan.print();