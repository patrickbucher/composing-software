import { pipe, trace } from "./compose.js";

function lower(x: string): string {
  return x.toLowerCase();
}

function trim(x: string): string {
  return x.trim();
}

const debugLowerTrim = pipe(
  lower,
  trace("after lower"),
  trim,
  trace("after trim"),
);
const result = debugLowerTrim(" FOO ");
console.log(result);
