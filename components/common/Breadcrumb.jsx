import Link from 'next/link'
import React from 'react'

export default function Breadcrumb({data}) {
  return (
      <div className="head px-4 sm:px-20 flex items-center gap-2 sm:gap-1 py-2 sm:py-5 border-b-[1px] border-solid border-[#E5E5E5]">
          {data.map((item) =>
              <div key={item.id} className="home flex items-center gap-2 sm:gap-1">
                  {item.icon}
                  <Link href={item.url} className='truncate max-sm:!max-w-[12rem]'>
                      <span className={`${item.classNameTitle} truncate `}>{ item.title}</span>
                  </Link>
              </div>
          )}
          </div>
  )
}
