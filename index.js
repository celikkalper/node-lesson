import slugify from "slugify";
import add from "./my-module.js";

const title = slugify("some string lorem ipsum", "-");

console.log(title);

console.log(add(2, 4));
