import { getAllNews } from "@/utilities/getAllNews";
import Image from "next/image";
import React from "react";

const Sidebar = async () => {
  const data = await getAllNews();

  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <Image
          className="w-full rounded-2xl h-60"
          src={data[7]?.thumbnail_url}
          width={300}
          height={300}
          alt={data[0].title}
        />

        <div className="card-body">
          <span className="bg-green-500  w-25 text-center  px-3 py-2 rounded-3xl text-white">
            {data[7].category}
          </span>

          <h2 className="card-title">{data[0].title}</h2>
          <p>
            {data[7].details.length > 200
              ? data[7].details.slice(0, 200)
              : data[7].details}
          </p>
        </div>
      </div>

      <div>
        {data.slice(8, 18).map((news) => (
          <div
            key={news._id}
            className="card items-center card-side bg-base-100 shadow-sm my-5"
          >
            <Image
              className="w-22 h-22 rounded-2xl"
              width={100}
              height={100}
              src={news.thumbnail_url}
              alt="Movie"
            />
            <div className="">
              <div className="p-3">
                <h2 className="card-title">{news.title}</h2>
                <p>{news.author.published_date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="card bg-base-100 shadow-sm">
        <Image
          className="w-full rounded-2xl h-60"
          src={data[18]?.thumbnail_url}
          width={300}
          height={300}
          alt={data[0].title}
        />
      </div>
    </div>
  );
};

export default Sidebar;
