'use client';

import { useState } from 'react';
import Link from 'next/link';
import { EllipsisVerticalIcon, XMarkIcon } from '@heroicons/react/24/solid';

export default function NavMenu() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClick = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <>
      <div className="md:hidden">
        <EllipsisVerticalIcon
          className="size-10 md:hidden"
          onClick={handleClick}
        />
        <div
          className={`fixed left-0 top-0 z-40 h-auto w-full overflow-y-auto bg-black p-4 transition-transform duration-500 ${
            toggleMenu ? 'translate-y-0' : '-translate-y-full'
          } flex items-start justify-start md:-translate-y-full`}
        >
          <div className="ml-8 flex flex-col space-y-4 text-3xl font-bold text-white">
            <Link href="/home">home</Link>
            <Link href="/schedule">schedule</Link>
            <Link href="/about">about</Link>
            <Link href="/">podcasts</Link>
            <Link href="/">sports</Link>
          </div>
          <XMarkIcon
            className="absolute right-0 top-0 size-14 text-white"
            onClick={handleClick}
          />
        </div>
      </div>
      <div className="hidden flex-row items-end justify-end space-x-4 text-xl font-bold text-black md:flex">
        <Link href="/home">HOME</Link>
        <Link href="/schedule">SCHEDULE</Link>
        <Link href="/about">ABOUT</Link>
        <Link href="/">PODCASTS</Link>
        <Link href="/">SPORTS</Link>
      </div>
    </>
  );
}
