'use client';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NavigationItemV1 from './NavigationItemV1';
import NavigationItemV2 from './NavigationItemV2';

export default function NavigationList() {
  const [catalogList, setCatalogList] = useState([]);

  const renderMenu = (items) => {
    return items.map((item) => {
      if (item.children && Array.isArray(item.children)) {
        const _items = item.children.map((children) => ({
          title: children.title,
          to: children.to,
        }));
        return (
          <li key={uuidv4()} className="relative w-full cursor-pointer">
            <NavigationItemV2 title={item.title} links={_items} />
            <div className="h-[0.0625rem] w-full bg-white/20 md:w-[22.5rem] xl:w-full"></div>
          </li>
        );
      }
      return (
        <li key={uuidv4()} className="relative w-full">
          <NavigationItemV1 title={item.title} to={item.to} />
        </li>
      );
    });
  };

  useEffect(() => {
    setCatalogList([
      { title: 'Home', to: '/', children: null },
      { title: 'About Us', to: '/about-us', children: null },
      {
        title: 'Tours',
        children: [
          {
            title: 'Best Budget',
            to: '/tours?device=best-budget',
            children: null,
          },
          {
            title: 'Standard',
            to: '/tours?device=standard',
            children: null,
          },
          {
            title: 'Premium',
            to: '/tours?device=premium',
            children: null,
          },
          { title: 'All Tours', to: '/tours', children: null },
        ],
      },
      { title: 'Activity', to: '/activity', children: null },
      { title: 'Destination', to: '/destination', children: null },
      { title: 'Blog', to: '#', children: null },
      { title: 'FAQ', to: '#', children: null },
      { title: 'Contact Us', to: '/contact-us', children: null },
    ]);
  }, []);

  return (
    <ul className="hidden_scrollbar flex h-full w-full flex-col gap-[1rem] overflow-y-auto">
      {renderMenu(catalogList)}
    </ul>
  );
}
