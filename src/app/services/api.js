export const fetchTours = async (page, limit) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`,
    {
      cache: "no-cache",
    }
  );
  const data = await res.json();
  const total = parseInt(res.headers.get("X-Total-Count" || 0));
  return { tours: data, totalCount: total };
};
