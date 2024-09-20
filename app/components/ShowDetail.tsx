import Image from 'next/image';
import { trimSpinitronDescriptionString } from '../utils';
import type { Show } from '@wnyu/spinitron-sdk';

interface ShowDetailProps {
  show: Show;
}

export default function ShowDetail({ show }: ShowDetailProps) {
  return (
    <div className="pt-4 md:px-10">
      <div>
        <Image
          src={show.image}
          width={500}
          height={200}
          alt="show image"
          className="h-[300px] w-[500px] border-2 border-black object-cover"
        />
        <div className="pt-2 text-4xl font-extrabold">{show.title}</div>
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
