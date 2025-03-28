import { compose } from "./compose.js";

function lower(x: string): string {
  return x.toLowerCase();
}

function trim(x: string): string {
  return x.trim();
}

const lowerTrim = compose(lower, trim);
console.log(lowerTrim(" FOO "), lowerTrim(" BAR "));
