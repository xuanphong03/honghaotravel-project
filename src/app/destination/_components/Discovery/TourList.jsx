import Link from "next/link";
import React from "react";
import ItemTour from "../../../../../components/common/ItemTour/ItemTour";

export default function TourList({ tours }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-[59.5625rem] gap-[1.25rem]">
      {tours.map((tourItem, index) => (
        <Link
          href="#"
          key={index}
          className="shadow inline-block col-span-1 h-[23.33775rem] w-full md:w-[29.375rem] md:h-[31.25rem] rounded-[1.25rem] overflow-hidden"
        >
          <ItemTour
            tag={"Best destination"}
            title={tourItem.title}
            content={tourItem.body}
          />
        </Link>
      ))}
    </div>
  );
}
