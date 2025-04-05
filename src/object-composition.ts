const assign = (acc, o) => ({ ...acc, ...o });
const collect = (acc, o) => acc.concat([o]);
const pair = (acc, o) => [o, acc];

export { assign, collect, pair };
