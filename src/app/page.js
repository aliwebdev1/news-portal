import LatestNews from "@/components/ui/LatestNews/LatestNews";
import Sidebar from "@/components/ui/Sidebar/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="md:flex gap-5 px-4 md:px-12 py-5">
      <div className=" md:w-2/3 ">
        <LatestNews></LatestNews>
      </div>
      <div className=" md:w-1/3">
        <Sidebar></Sidebar>
      </div>
    </div>
  );
}
