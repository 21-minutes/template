export async function getTopics() {
  try {
    const response = await fetch(
      `https://janisringli-blog-backend.herokuapp.com/api/topics`,
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

export async function createTopic(data) {
  const response = await fetch(
    `https://janisringli-blog-backend.herokuapp.com/api/topics`,
    {
      method: "GET",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${process.env.API_TOKEN}`,
      //   },
      body: JSON.stringify({ topic: data }),
    }
  );
  return await response.json();
}
