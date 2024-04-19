import axios from "axios";

const userPosts = (number) => {
  return new Promise(async (resolve, reject) => {
    const { data: user } = await axios(
      "https://jsonplaceholder.typicode.com/users/" + number
    );
    const { data: userPost } = await axios(
      "https://jsonplaceholder.typicode.com/posts/?userId=" + number
    );
    console.log(user);
    console.log(userPost);
    resolve(user, userPost);
  });
};

export default userPosts;
