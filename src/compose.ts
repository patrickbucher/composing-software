export function compose<T>(f: (x: T) => T, g: (x: T) => T): (x: T) => T {
  return (x) => f(g(x));
}
