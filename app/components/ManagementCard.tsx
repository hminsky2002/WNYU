import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { MANAGEMENT_CARD_QUERYResult } from '../../sanity.types';

export function ManagementCard({
  card,
}: {
  card: MANAGEMENT_CARD_QUERYResult;
}) {
  const { name, role, picture } = card || {};

  return (
    <div className="flex-col">
      {picture?.asset?._ref ? (
        <Image
          className="w-1/4"
          src={urlFor(picture?.asset?._ref).width(300).height(300).url()}
          width={300}
          height={300}
          alt={name || ''}
        />
      ) : null}
      {name ? <p className="text-xl">{name}</p> : null}
      {role ? <p className="text-lg">{role}</p> : null}
    </div>
  );
}
