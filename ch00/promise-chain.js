const g = n => n + 1;
const f = n => n * 2;

const wait = time => new Promise((resolve, reject) => setTimeout(resolve, time));

wait(300)
    .then(() => 20)
    .then(g)
    .then(f)
    .then(value => console.log(value));
