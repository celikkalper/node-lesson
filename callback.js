import fetch from "node-fetch";
import axios from "axios";

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

// getData();

// AXIOS
async function getDataAxios() {
  const { data: user1 } = await axios("https://jsonplaceholder.typicode.com/users/1");
  const { data: post1 } = await axios("https://jsonplaceholder.typicode.com/posts/1");
  console.log("User 1", user1);
  console.log("Post 1", post1);
}

// getDataAxios();

const getUsers = () => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");
    resolve(data);
  });
};

const getPost = (id) => {
  return new Promise(async (resolve, reject) => {
    const data = await axios(`https://jsonplaceholder.typicode.com/posts/${id}`);
    resolve(data);
  });
};

(async () => {
  try {
    await getUsers()
      .then((data) => console.log(data))
      .catch((err) => {
        console.log(err);
      });

    await getPost(5)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
})();
