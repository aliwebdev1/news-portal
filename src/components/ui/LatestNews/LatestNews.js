import { getAllNews } from "@/utilities/getAllNews";
import Image from "next/image";
import React from "react";

const LatestNews = async () => {
  const data = await getAllNews();
  return (
    <div>
      {/* single data */}
      <div className="card bg-base-100 shadow-sm">
        <Image
          src={data[0]?.thumbnail_url}
          className="rounded-2xl"
          width={1000}
          height={500}
          alt={data[0].title}
        />

        <div className="card-body">
          <span className="bg-green-500  w-25 text-center  px-3 py-2 rounded-3xl text-white">
            {data[0].category}
          </span>

          <h2 className="card-title">{data[0].title}</h2>
          <p>
            {data[0].details.length > 200
              ? data[0].details.slice(0, 200)
              : data[0].details}
          </p>
        </div>
      </div>

      {/* grid */}
      <div className="mt-4 grid grid-cols-2 gap-5">
        {data.slice(1, 7).map((news) => (
          <div key={news._id} className="card bg-base-100 shadow-sm">
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
                {news.title.length > 80 ? news.title.slice(0, 80) : news.title}
              </h2>
              <p>
                {" "}
                {news.details.length > 100
                  ? news.details.slice(0, 100)
                  : news.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
