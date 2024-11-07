import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';

import { ARTICLE_QUERYResult } from '../../sanity.types';

export function Article({ article }: { article: ARTICLE_QUERYResult }) {
  const { name, date, author, picture, content } = article || {};

  return (
    <div>
      <div>
        {name ? <div>{name}</div> : null}
        {date ? <div>{date}</div> : null}
        {author ? <div>{author}</div> : null}
      </div>
      {picture?.asset?._ref ? (
        <Image
          className=""
          src={urlFor(picture?.asset?._ref).width(300).height(300).url()}
          width={500}
          height={500}
          alt={name || ''}
        />
      ) : null}
      {content ? <PortableText value={content} /> : null}
    </div>
  );
}
