const hello = (name) => {
  console.log("Hello " + name);
  console.log(`Hello ${name}`);
};

const add = (a, b) => {
  return a + b;
};

const minus = (a, b) => {
  return a - b;
};

const text = "Text";

const user = { name: "Okan", surname: "Guven" };

const users = [
  {
    name: "Alper",
    surname: "Celik",
  },
  {
    name: "Ayzek",
    surname: "Abdulov",
  },
];

export { hello, add, minus, text, user, users };
