export const getSingleNews = async (id) => {
  const res = await fetch(`https://news-server-done.vercel.app/news/${id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};
