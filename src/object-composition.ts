const assign = (acc, o) => ({ ...acc, ...o });
const collect = (acc, o) => acc.concat([o]);

export { assign, collect };
