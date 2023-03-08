import fetch from "node-fetch";

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((data) => data.json())
//   .then(
//     (users) => console.log(users),
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//       .then((data) => data.json())
//       .then((post) => console.log("Post 1 yüklendi.")),
//   );

async function getData() {
  const data = await (await fetch("https://jsonplaceholder.typicode.com/users/1")).json();
  const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
  const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();

  console.log("users", data);
  console.log("Post 1", post1);
  console.log("Post 2", post2);
}

getData();
