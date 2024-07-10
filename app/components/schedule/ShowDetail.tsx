import Image from 'next/image';
import type { Show } from '@wnyu/spinitron-sdk';

interface ShowDetailProps {
  show: Show;
}

export default function ShowDetail({ show }: ShowDetailProps) {
  return (
    <div>
      <Image src={show.image} width={500} height={500} alt="show image" />
      <div>{show.title}</div>
    </div>
  );
}
