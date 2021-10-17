const g = n => n + 1;
const f = n => n * 2;

const doStuff = x => {
    const afterG = g(x);
    const afterF = f(afterG);
    return afterF;
};

console.log(doStuff(20));
