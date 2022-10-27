export async function getArticles() {
  try {
    const response = await fetch(
      "http://127.0.0.1:1337/api/articles?populate=topics,thumbnail,author.avatar",
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

export async function getSingleArticle(articleId) {
  try {
    const response = await fetch(
      `http://127.0.0.1:1337/api/articles/${articleId}?populate=topics,thumbnail,author.avatar`,
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

export async function createArticle(data) {
  const response = await fetch(
    `http://127.0.0.1:1337/api/articles?populate=topics,thumbnail,author.avatar`,
    {
      method: "GET",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${process.env.API_TOKEN}`,
      //   },
      body: JSON.stringify({ article: data }),
    }
  );
  return await response.json();
}
