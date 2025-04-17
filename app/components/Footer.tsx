import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';
import { FOOTER_QUERYResult } from '../../sanity.types';

export default function Footer({ footer }: { footer: FOOTER_QUERYResult }) {
  const { socials, blockText, footerImage } = footer || {};
  return (
    <div className="overflow-hidden border-t-2 border-black bg-white p-4">
      <div className="mx-auto flex flex-col-reverse items-center justify-center gap-0 lg:flex-row">
        <div className="flex items-center gap-6 text-left">
          {socials?.map((social) =>
            social.link && social.icon?.asset?._ref ? (
              <Link href={social.link} key={social._key}>
                <Image
                  src={urlFor(social.icon.asset._ref).url()}
                  width={80}
                  height={80}
                  alt="social media icon"
                  className="size-[40px]"
                />
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
                  urlFor(footerImage.asset._ref).width(300).height(300).url() ??
                  '/public/placeholder.png'
                }
                width={150}
                height={150}
                alt="wnyu logo"
              />
            </div>
            {blockText && (
              <div className="text-md w-full md:w-auto">
                <PortableText value={blockText} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
