class Singleton {
    static instance;
    name = '';

    constructor(name = '') {
        if (!!Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = this;
        this.name = name;
    };
};

const instance1 = new Singleton('Megan');
const instance2 = new Singleton('Estefanie');
const instance3 = new Singleton('Darcy');

console.log(`Instance name 1 is: ${instance1.name}`);
console.log(`Instance name 2 is: ${instance2.name}`);
console.log(`Instance name 3 is: ${instance3.name}`);