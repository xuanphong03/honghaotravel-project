import Link from 'next/link';
import React from 'react';
import ItemTour from '../../../../../components/common/ItemTour/ItemTour';

export default function TourList({ tours }) {
  return (
    <div className="grid w-full grid-cols-1 gap-[1.25rem] md:w-[59.5625rem] md:grid-cols-2">
      {tours.map((tourItem, index) => (
        <Link
          href="#"
          key={index}
          className="col-span-1 inline-block h-[23.33775rem] w-full overflow-hidden rounded-[1.25rem] shadow md:h-[31.25rem] md:w-[29.375rem]"
        >
          <ItemTour
            tag={'Best destination'}
            title={tourItem.title}
            content={tourItem.body}
          />
        </Link>
      ))}
    </div>
  );
}
