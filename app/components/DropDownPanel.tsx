'use client';

import { useContext } from 'react';
import { motion } from 'framer-motion';
import { DropdownToggleContext } from '../providers/ToggleProvider';
import CurrentPlaylistPanel from './CurrentPlaylistPanel';

export default function DropDownPanel() {
  const context = useContext(DropdownToggleContext);

  const handleClick = () => {
    context?.setToggle(!context?.toggle);
  };

  return (
    <motion.div
      onClick={handleClick}
      initial={{ y: '-100%' }}
      animate={context?.toggle ? { y: 0 } : { y: '-100%' }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed left-0 top-[50px] z-40 h-[calc(100vh)] w-full overflow-y-auto overflow-x-clip bg-black md:hidden"
    >
      <div className="p-6">
        <CurrentPlaylistPanel dropdown={true} />
      </div>
    </motion.div>
  );
}
