import { ArrowsPointingOutIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { trimSpinitronDescriptionString } from '../utils';
import type { Show } from '@wnyu/spinitron-sdk';
import type { Dispatch, SetStateAction } from 'react';

interface ShowDetailProps {
  show: Show;
  toggleScheduleDisplay: boolean;
  setToggleScheduleDisplay: Dispatch<SetStateAction<boolean>>;
}

export default function ShowDetail({
  show,
  toggleScheduleDisplay,
  setToggleScheduleDisplay,
}: ShowDetailProps) {
  const handleClick = () => {
    setToggleScheduleDisplay(!toggleScheduleDisplay);
  };

  return (
    <div className="mx-10 h-[800px] overflow-y-auto">
      <div>
        <Image
          src={show.image}
          width={500}
          height={500}
          alt="show image"
          className="border-2 border-black object-cover"
        />
        <div className="text-4xl font-extrabold">{show.title}</div>
        <div className="text-lg">
          hosted by: {show.personas?.[0].name ?? 'unhosted'}
        </div>
        <div className="text-lg">
          {new Date(show.start).toLocaleTimeString()} {' - '}
          {new Date(show.end).toLocaleTimeString()}
        </div>
      </div>
      <div className="mt-4">
        {trimSpinitronDescriptionString(show.description)}
      </div>
      <ArrowsPointingOutIcon
        onClick={handleClick}
        className="mt-4 size-6 cursor-pointer transition-colors hover:text-gray-400"
      />
    </div>
  );
}
