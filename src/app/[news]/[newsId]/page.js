import Sidebar from "@/components/ui/Sidebar/Sidebar";
import { getSingleNews } from "@/utilities/getSingleNews";
import Image from "next/image";
import React from "react";

const NewsDetailsPage = async ({ params }) => {
  const data = await getSingleNews(params.newsId);

  return (
    <div className="md:flex gap-5 px-4 md:px-12 py-5">
      <div className=" md:w-2/3 ">
        <div className="">
          <div className="card bg-base-100 shadow-sm">
            <Image
              src={data.thumbnail_url}
              className="rounded-2xl w-full"
              width={1000}
              height={500}
              alt={data.title}
            />

            <div className="card-body">
              <span className="bg-green-500  w-25 text-center  px-3 py-2 rounded-3xl text-white">
                {data.category}
              </span>

              <p className="font-semibold mt-3">
                Total View: {data.total_view}
              </p>

              <h2 className="card-title">{data.title}</h2>
              <p>{data.details}</p>
            </div>

            <Image
              src={data.image_url}
              className="rounded-2xl w-full"
              width={1000}
              height={500}
              alt={data.title}
            />

            <div className="my-5 flex items-center p-4">
              <Image
                src={data?.author.img}
                className="cover w-16 h-16 rounded-full p-2 border-2 border-green-500"
                width={200}
                height={200}
                alt={data?.title}
              />
              <div className="ms-3 ">
                <p>Name: {data.author?.name}</p>
                <p>Date: {data.author?.published_date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" md:w-1/3">
        <Sidebar></Sidebar>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
