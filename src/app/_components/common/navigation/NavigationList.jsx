"use client";
import React, { useEffect, useState } from "react";
import NavigationItemV1 from "./NavigationItemV1";
import NavigationItemV2 from "./NavigationItemV2";

export default function NavigationList() {
  const [catalogList, setCatalogList] = useState([]);

  const renderMenu = (items) => {
    return items.map((item) => {
      if (item.children) {
        return (
          <li key={item.id} className="relative w-full">
            <NavigationItemV2
              title={item.title}
              links={item.children.map((child) => ({
                title: child.title,
                to: child.to,
              }))}
            />
            <div className="w-[22.5rem] h-[0.0625rem] bg-white/20"></div>
          </li>
        );
      }
      return (
        <li key={item.id} className="relative w-full">
          <NavigationItemV1 title={item.title} to={item.to} />
        </li>
      );
    });
  };

  useEffect(() => {
    setCatalogList([
      { id: 1, title: "Home", to: "/", children: null },
      { id: 2, title: "About Us", to: "#", children: null },
      {
        id: 3,
        title: "About Us",
        children: [
          {
            id: 4,
            title: "Best Budget",
            to: "/tours?device=best-budget",
            children: null,
          },
          {
            id: 5,
            title: "Standard",
            to: "/tours?device=standard",
            children: null,
          },
          {
            id: 6,
            title: "Premium",
            to: "/tours?device=premium",
            children: null,
          },
          { id: 7, title: "All Tours", to: "/tours", children: null },
        ],
      },
      { id: 8, title: "Activity", to: "#", children: null },
      { id: 9, title: "Destination", to: "#", children: null },
      { id: 10, title: "Blog", to: "#", children: null },
      { id: 11, title: "FAQ", to: "#", children: null },
      { id: 12, title: "Contact Us", to: "#", children: null },
    ]);
  }, []);

  return (
    <ul className="flex flex-col gap-[0.5rem] h-full overflow-y-auto hidden_scrollbar">
      {renderMenu(catalogList)}
    </ul>
  );
}
