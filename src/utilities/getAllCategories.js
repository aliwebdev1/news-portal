export const getAllCategories = async () => {
  const res = await fetch("https://news-server-done.vercel.app/categories", {
    cache: "force-cache",
  });
  const data = await res.json();
  return data;
};
