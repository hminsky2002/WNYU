import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { MANAGEMENT_CARD_QUERYResult } from '../../sanity.types';

export function ManagementCard({
  card,
}: {
  card: MANAGEMENT_CARD_QUERYResult;
}) {
  const { name, role, email, picture } = card || {};

  return (
    <div className="py-1">
      {picture?.asset?._ref ? (
        <Image
          className="aspect-square outline outline-offset-[-3px] outline-black"
          src={urlFor(picture?.asset?._ref).width(300).height(300).url()}
          width={300}
          height={300}
          alt={name || ''}
        />
      ) : null}
      {name ? <p className="text-xl">{name}</p> : null}
      {role ? <p className="text-lg">{role}</p> : null}
      {email ? <p className="text-lg">{email}</p> : null}
    </div>
  );
}
