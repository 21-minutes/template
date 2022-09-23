export async function getAllUsers() {
  try {
    const response = await fetch("127.0.0.1:1337/api/authors/1");

    return await response.json();
  } catch (error) {
    return [];
  }
}

export async function createUser(data) {
  const response = await fetch(`127.0.0.1:1337/api/authors/1`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user: data }),
  });
  return await response.json();
}
