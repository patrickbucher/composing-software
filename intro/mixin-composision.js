// Inheritance

class Foo {
    constructor() {
        this.a = 'a';
    }
}

class Bar extends Foo {
    constructor(options) {
        super(options);
        this.b = 'b';
    }
}

const myBar = new Bar();

// Mixin Composition

const a = {
    a: 'a'
};

const b = {
    b: 'b'
};

const c = {...a, ...b};
