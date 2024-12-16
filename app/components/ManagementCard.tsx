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
    <div className="flex-shrink break-words py-1 md:w-[200px]">
      <a href={`mailto: ${email}`} target="_blank">
        {picture?.asset?._ref ? (
          <Image
            className="aspect-square outline outline-offset-[-3px] outline-black"
            src={urlFor(picture?.asset?._ref).width(300).height(300).url()}
            width={200}
            height={200}
            alt={name || ''}
          />
        ) : null}
        {name ? <p className="text-xl">{name}</p> : null}
        {role ? <p className="text-base">{role}</p> : null}
        {email ? <p className="text-base">{email}</p> : null}
      </a>
    </div>
  );
}
