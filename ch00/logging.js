const g = n => n + 1;
const f = n => n * 2;

// 1) imperative solution
const doStuff = x => {
    const afterG = g(x);
    console.log(`after g: ${afterG}`);
    const afterF = f(afterG);
    console.log(`after f: ${afterF}`);
    return afterF;
};

doStuff(20);

const trace = label => value => {
    console.log(`${label}: ${value}`);
    return value;
};

// 2) imperative solution using a curried trace function
const doStuffBetter = x => {
    const afterG = g(x);
    trace('after g')(afterG);
    const afterF = f(afterG);
    trace('after f')(afterF);
    return afterF;
};

doStuffBetter(20);

const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

// 3) functional solution using a pipeline of functions
const doStuffEvenBetter = pipe(g, trace('after g'), f, trace('after f'));

doStuffEvenBetter(20);
