import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';
import { FOOTER_QUERYResult } from '../../sanity.types';

export default function Footer({ footer }: { footer: FOOTER_QUERYResult }) {
  const { links, blockText, footerImage } = footer || {};
  return (
    <div className="overflow-auto border-t-2 border-black bg-white p-4">
      <div className="mx-auto flex flex-col-reverse items-center justify-between gap-4 md:w-2/3 md:flex-row">
        <div className="flex w-full flex-col items-start gap-6 text-left md:w-auto md:gap-4">
          {links?.map((link) =>
            link.url && link.title ? (
              <Link key={link._key} href={link.url}>
                <h4 className="underline transition-colors hover:text-red-500">
                  {link.title}
                </h4>
              </Link>
            ) : null,
          )}
        </div>
        {footerImage?.asset?._ref && (
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <div className="flex-shrink-0">
              <Image
                className="object-cover"
                src={
                  urlFor(footerImage?.asset?._ref)
                    .width(300)
                    .height(300)
                    .url() ?? '/public/placeholder.png'
                }
                width={300}
                height={300}
                alt="wnyu logo"
              />
            </div>
            {blockText && (
              <div className="w-full md:w-auto">
                <PortableText value={blockText} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
