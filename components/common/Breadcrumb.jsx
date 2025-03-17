import Link from 'next/link'
import React from 'react'

export default function Breadcrumb({data}) {
  return (
      <div className="head max-sm:px-4   gap-2 sm:gap-1 py-2 sm:py-5 border-b-[1px] border-solid border-gray-scale-5 ">
          <div className='max-w-[87.5rem] mx-auto flex items-center gap-2'>
              {data.map((item) =>
              <div key={item.id} className="home flex items-center gap-2 ">
                  {item.icon}
                  <Link href={item.url} className='truncate max-sm:!max-w-[12rem]'>
                      <span className={`${item.classNameTitle} truncate `}>{ item.title}</span>
                  </Link>
              </div>
          )}
          </div>
          
          </div>
  )
}
