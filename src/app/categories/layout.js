import CategoryList from "@/components/ui/CategoryList/CategoryList";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="p-5">
      <div className="flex justify-between gap-5">
        <div className="w-1/3">
          <CategoryList></CategoryList>
        </div>
        <div className="w-2/3">{children}</div>
      </div>
    </div>
  );
};

export default layout;
