const users = ["Ayzek", "Mamy", "Alper"];
const users2 = [
  { name: "Ayzek", age: 18 },
  { name: "Ayzek", age: 24 },
  { name: "Mamy" },
  { name: "Alper" },
];

/*
push => listenin sonuna eleman ekler
map => liste elemanlarini tek tek donerek yazdirir.
find => liste icinde verilen kosula gore arama yapar
filter => listede verilene kosula gore arama yapar ve kosula uyanlari getirir.
some => liste icindeki elemanlardan herhangi biri verilen kosula uyuyorsa TRUE uymuyorsa False degeri doner
every => some ile ayni islevi yapar fakat listedeki butun elemanlarin sarta uymasini bekler
includes => verilen kosul listenin icinde geciyorsa TRUE gecmiyorsa FALSE degeri verir
*/

//PUSH
// users.push("Sehriyar");
// console.log(users);

//MAP

// users.map((user) => {
//   console.log(user);
// });

// users2.map((user2) => {
//   console.log(user2);
// });

// users2.map((user2) => {
//   console.log(user2.name);
// });

//FIND

// const result = users2.find((item) => item.name === "Ayzek");
// const result2 = users2.find((item) => item.name === "Ayzek" && item.age > 20); // Buldugu ilk kaydi getirir
// console.log(result2);

//FILTER

// const filtered = users2.filter((item) => item.name === "Alper" || item.age < 20);
// console.log(filtered);

//SUM

// const someUser = users2.some((item) => item.age < 20);
// console.log(someUser);

//EVERY

// const everyUser = users2.every((item) => item.age < 20);
// console.log(everyUser);

//INCLUDES

const meyveler = ["Elma", "Armut", "Muz"];

const isIncluded = meyveler.includes("Muz");
const isIncluded2 = meyveler.includes("muz");

console.log(isIncluded);
console.log(isIncluded2);
