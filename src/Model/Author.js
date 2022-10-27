export async function getAllUsers() {
  try {
    const response = await fetch(
      "http://127.0.0.1:1337/api/authors/1?populate=*",
      {
        method: "GET",
        // headers: new Headers({
        //   Authorization: `bearer ${import.meta.env.VITE_REACT_APP_API_TOKEN}`,
        // }),
      }
    );
    const payload = await response.json();
    return payload.data;
  } catch (error) {
    console.log(error);
  }
}

export async function createUser(data) {
  const response = await fetch(`127.0.0.1:1337/api/authors/1?populate=*`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
    body: JSON.stringify({ user: data }),
  });
  return await response.json();
}
