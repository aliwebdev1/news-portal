import { getAllCategories } from "@/utilities/getAllCategories";
import Link from "next/link";
import React from "react";

const CategoryList = async () => {
  const data = await getAllCategories();
  return (
    <div className="bg-base-200 p-10 rounded-lg">
      <div>
        {data.map((category) => (
          <Link
            className="btn btn-outline border-1 p-2 block mb-4 capitalize"
            key={category._id}
            href={`/categories/news?category=${category.category}`}
          >
            {category.category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
