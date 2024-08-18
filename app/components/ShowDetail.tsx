import Image from 'next/image';
import { trimSpinitronDescriptionString } from '../utils';
import type { Show } from '@wnyu/spinitron-sdk';

interface ShowDetailProps {
  show: Show;
}

export default function ShowDetail({ show }: ShowDetailProps) {
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
    </div>
  );
}
