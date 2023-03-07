import slugify from "slugify";
import { hello, add, minus, text, user, users } from "./my-module.js";

const title = slugify("some string lorem ipsum", "-");

console.log(title);

console.log(add(2, 4));
console.log(minus(4, 2));
console.log(hello("Mary"));
console.log(text);
console.log(user);
console.log(users);
