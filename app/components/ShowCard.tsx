import { Show } from '@wnyu/spinitron-sdk';
import Image from 'next/image';

interface ShowCardProps {
  show: Show;
  activeShowId?: number;
  handleClick?: () => void;
}

export function ShowCard({ show, activeShowId, handleClick }: ShowCardProps) {
  return (
    <div
      className="group relative z-10 h-[150px] w-[200px] border-2 border-black bg-gray-500 text-white md:h-[300px] md:w-[400px]"
      onClick={handleClick}
    >
      <Image
        src={show.image}
        alt={`${show.title} cover image`}
        fill
        className={`object-cover transition-all ease-in-out group-hover:brightness-0 ${activeShowId === show.id ? 'bg-black brightness-0' : ''}`}
      />
      <div className="absolute bottom-10 mx-4">
        <div className="text-4xl font-extrabold">{show.title}</div>
        <div className="text-lg">hosted by {show.personas?.[0]?.name}</div>
        <div className="text-lg">
          {new Date(show.start).toLocaleTimeString()} {' - '}
          {new Date(show.end).toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
}
