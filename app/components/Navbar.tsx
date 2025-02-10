'use client';

import { SpinitronMetadata } from '@wnyu/spinitron-sdk';
import Marquee from 'react-fast-marquee';
import { useState, useEffect, useContext } from 'react';
import { useMetadata } from '@/app/client-api';
import { DropdownToggleContext } from '../providers/ToggleProvider';
import DropDownPanel from './DropDownPanel';
import NavMenu from './NavMenu';
import Stream from './Stream';

const REFRESH_STREAM_INTERVAL = 5000;

export default function Navbar({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [metadataResponse, refreshMetadata] = useMetadata();
  const [metadata, setMetadata] = useState<SpinitronMetadata>();
  const context = useContext(DropdownToggleContext);

  const handleClick = () => {
    context?.setToggle(!context?.toggle);
  };

  useEffect(() => {
    if (metadataResponse) {
      setMetadata(metadataResponse);
    }
    const intervalId = setInterval(() => {
      refreshMetadata();
    }, REFRESH_STREAM_INTERVAL);

    return () => {
      clearInterval(intervalId);
    };
  }, [metadataResponse, refreshMetadata]);

  return (
    <>
      <div
        className={`fixed left-0 right-0 top-0 z-50 w-full justify-between border-b-2 border-black ${
          context?.toggle ? 'bg-black' : 'bg-white'
        } p-4 transition-all delay-150 md:h-16 md:bg-white`}
      >
        <div
          className={`flex justify-between transition-colors ease-in-out ${
            context?.toggle ? 'text-white' : ''
          } md:bg-white md:text-black`}
        >
          <Stream />
          <div
            onClick={handleClick}
            className="enable-animation flex cursor-default overflow-hidden text-xl font-bold"
          >
            <Marquee autoFill={true}>
              <div className="flex items-center px-4">
                <div className="mr-2 h-[1rem] w-[1rem] rounded-full bg-red-500"></div>
                <span>
                  Live Now: {metadata?.playlist_title} with {metadata?.dj}
                </span>
              </div>
            </Marquee>
          </div>
          <NavMenu />
        </div>
      </div>
      <DropDownPanel />
      {children}
    </>
  );
}
