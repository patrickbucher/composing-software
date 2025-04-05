import { assign, collect, pair } from "./object-composition";

const name = {
  firstName: "Patrick",
  lastName: "Bucher",
};
const address = {
  street: "Kottenmatte",
  number: 11,
  zipCode: 6210,
  town: "Sursee",
};
const contact = {
  email: "patrick.bucher@mailbox.org",
  website: "www.paedubucher.ch",
  github: "patrickbucher",
};

test("concatenation", () => {
  const composed = [name, address, contact].reduce(assign, {});
  expect(composed.firstName).toBe("Patrick");
  expect(composed.town).toBe("Sursee");
  expect(composed.website).toBe("www.paedubucher.ch");
});

test("collection", () => {
  const collected = [name, address, contact].reduce(collect, []);
  expect(collected).toContain(name);
  expect(collected).toContain(address);
  expect(collected).toContain(contact);
});

test("list aggregation", () => {
  const listed = [name, address, contact].reduceRight(pair, []);
  // car: [0], cdr: [1]
  expect(listed[0]).toBe(name);
  expect(listed[1][0]).toBe(address);
  expect(listed[1][1][0]).toBe(contact);
});
