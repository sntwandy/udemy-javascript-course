// Private properties

class Reactangule {
    #area = 0;

    constructor(base = 0, height = 0) {
        this.base = base;
        this.height = height;

        this.#area = base * height;
    };
};

const rectangule = new Reactangule(10, 15);
// rectangule.#area = 200;
console.log( rectangule );