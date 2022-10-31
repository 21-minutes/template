export async function getAllUsers() {
  try {
    const response = await fetch(
      `https://janisringli-blog-backend.herokuapp.com/api/authors/1?populate=*&sort[0]=id:desc`,
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
  const response = await fetch(
    `https://janisringli-blog-backend.herokuapp.com/api/authors/1?populate=*&sort[0]=id:desc`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
      body: JSON.stringify({ user: data }),
    }
  );
  return await response.json();
}
