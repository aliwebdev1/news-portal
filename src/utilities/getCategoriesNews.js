export const getCategoriesNews = async (category) => {
  const res = await fetch(
    `https://news-server-done.vercel.app/news?category=${category}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data;
};
