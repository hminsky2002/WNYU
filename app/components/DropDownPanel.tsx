'use client';

import { useContext } from 'react';
import { DropdownToggleContext } from '../providers/ToggleProvider';
import CurrentPlaylistPanel from './CurrentPlaylistPanel';

export default function DropDownPanel() {
  const context = useContext(DropdownToggleContext);

  const handleClick = () => {
    context?.setToggle(!context?.toggle);
  };

  return (
    <div
      onClick={handleClick}
      className={`fixed left-0 top-[72px] z-40 h-[calc(100vh-72px)] w-full overflow-y-auto bg-black transition-transform duration-500 ${
        context?.toggle ? 'translate-y-0' : '-translate-y-full'
      } md:-translate-y-full`}
    >
      <div className="p-6">
        <CurrentPlaylistPanel dropdown={true} />
      </div>
    </div>
  );
}