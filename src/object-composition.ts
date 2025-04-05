const assign = (acc, o) => ({ ...acc, ...o });
const collect = (acc, o) => acc.concat([o]);
const pair = (acc, o) => [o, acc];
const delegate = (acc, o) => Object.assign(Object.create(acc), o);

export { assign, collect, pair, delegate };
