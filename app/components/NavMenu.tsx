'use client';

import { useState, useContext } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { EllipsisVerticalIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { DropdownToggleContext } from '../providers/ToggleProvider';

export default function NavMenu() {
  const context = useContext(DropdownToggleContext);
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClick = () => {
    setToggleMenu((prev) => !prev);
    context?.setToggle(false);
  };

  const handleClose = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
    setToggleMenu(false);
    context?.setToggle(false);
  };

  const close = (e: React.MouseEvent<SVGSVGElement>) => {
    e.stopPropagation();
    setToggleMenu(false);
    context?.setToggle(false);
  };

  return (
    <>
      <div className="md:hidden">
        <EllipsisVerticalIcon
          className="size-10 md:hidden"
          onClick={handleClick}
        />
        <motion.div
          onClick={handleClick}
          initial={{ y: '-100%' }}
          animate={toggleMenu ? { y: 0 } : { y: '-100%' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed left-0 top-0 z-40 flex h-auto w-full items-start justify-start overflow-y-auto bg-black p-4"
        >
          <div className="my-7 ml-7 flex flex-col space-y-7 text-3xl font-bold text-white">
            <Link href="/home" onClick={handleClose}>
              home
            </Link>
            <Link href="/schedule" onClick={handleClose}>
              schedule
            </Link>
            <Link href="/about" onClick={handleClose}>
              about
            </Link>
            <Link href="/podcasts" onClick={handleClose}>
              podcasts
            </Link>
            <Link href="/sports" onClick={handleClose}>
              sports
            </Link>
          </div>
          <XMarkIcon
            className="z-100 absolute right-0 top-0 size-14 text-white"
            onClick={close}
          />
        </motion.div>
      </div>
      <div className="hidden flex-row items-end justify-end space-x-4 text-xl font-bold text-black md:flex">
        <Link href="/home">HOME</Link>
        <Link href="/schedule">SCHEDULE</Link>
        <Link href="/about">ABOUT</Link>
        <Link href="/podcasts">PODCASTS</Link>
        <Link href="/sports">SPORTS</Link>
      </div>
    </>
  );
}
