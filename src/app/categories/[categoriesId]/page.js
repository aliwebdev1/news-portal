import { getCategoriesNews } from "@/utilities/getCategoriesNews";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DynamicNewsPage = async ({ searchParams }) => {
  const categoryName = await searchParams.category;
  const data = await getCategoriesNews(categoryName);

  return (
    <div>
      <div className=" grid grid-cols-2 gap-5">
        {data.map((news) => (
          <Link key={news._id} href={`/${news.category}/${news._id}`}>
            <div className="card bg-base-100 shadow-sm">
              <figure>
                <Image
                  className="h-40 md:h-60"
                  src={news.thumbnail_url}
                  width={500}
                  height={500}
                  alt={news.title}
                />
              </figure>
              <div className="card-body ">
                <h2 className="card-title">
                  {news.title.length > 80
                    ? news.title.slice(0, 80)
                    : news.title}
                </h2>
                <p>
                  {" "}
                  {news.details.length > 100
                    ? news.details.slice(0, 100)
                    : news.details}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DynamicNewsPage;
