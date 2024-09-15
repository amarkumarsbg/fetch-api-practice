export const getPost = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });

  return response.json();
};

export const getRandomUser = async () => {
  const response = await fetch("https://randomuser.me/api/", { method: "GET" });

  return response.json();
};
