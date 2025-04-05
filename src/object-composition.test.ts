import { assign } from "./object-composition";

test("concatenation", () => {
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

  const composed = [name, address, contact].reduce(assign, {});

  expect(composed.firstName).toBe("Patrick");
  expect(composed.town).toBe("Sursee");
  expect(composed.website).toBe("www.paedubucher.ch");
});
