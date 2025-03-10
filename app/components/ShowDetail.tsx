import Image from 'next/image';
import { trimSpinitronDescriptionString } from '../utils';
import type { Show } from '@wnyu/spinitron-sdk';

interface ShowDetailProps {
  show: Show;
}

export default function ShowDetail({ show }: ShowDetailProps) {
  return (
    <div className="pb-6">
      <div>
        <Image
          src={show.image ?? '/placeholder.png'}
          width={500}
          height={200}
          alt="show image"
          className="mt-1 h-[300px] w-full border-2 border-black object-cover"
        />
        <div className="pt-4 text-4xl font-extrabold">{show.title}</div>
        <div className="text-lg">
          hosted by: {show.personas?.[0].name ?? 'unhosted'}
        </div>
        <div className="text-lg">
          {new Date(show.start).toLocaleTimeString('en-US', {
            weekday: 'long',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          })}{' '}
          {' - '}
          {new Date(show.end).toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          })}
        </div>
      </div>
      <div className="mt-4">
        {trimSpinitronDescriptionString(show.description)}
      </div>
    </div>
  );
}
