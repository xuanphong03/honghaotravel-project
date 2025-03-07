import React from "react";

export default function Breadcrumb() {
  return (
    <section className="overflow-hidden flex flex-col gap-[1.25rem] pt-[1.25rem]">
      <div className="w-[100rem] mx-auto overflow-hidden ">
        <div className="w-full pl-[5rem] flex items-center">
          <p>Home</p>
          <span>/</span>
          <p>Destination</p>
        </div>
      </div>
      <div className="w-full h-[0.0625rem] bg-[#f5f5f5]"></div>
    </section>
  );
}
