'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import type { ANNOUNCEMENTS_QUERYResult } from '../../sanity.types';
import 'swiper/css';
import 'swiper/css/autoplay';
import Link from 'next/link';

export default function AnnouncementsCarousel({
  announcements,
}: {
  announcements: ANNOUNCEMENTS_QUERYResult;
}) {
  return (
    <Swiper
      spaceBetween={1}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="h-full w-full border-2 border-black"
    >
      {announcements.map((announcement) =>
        announcement.link ? (
          <Link href={announcement.link}>
            <SwiperSlide key={announcement.subtitle} className="relative">
              <Image
                src={urlFor(
                  announcement?.announcementImage?.asset?._ref ??
                    '/placeholder.png',
                )
                  .width(300)
                  .height(300)
                  .url()}
                fill
                className="object-cover"
                alt={announcement.title || ''}
              />
              <div className="absolute bottom-0 w-full bg-black text-white md:h-1/5">
                <div className="mx-2 my-2 md:mx-4 md:my-4">
                  <h4 className="break-words">{announcement.title}</h4>
                  <p className="ml-1">{announcement.subtitle}</p>
                </div>
              </div>
            </SwiperSlide>
          </Link>
        ) : null,
      )}
    </Swiper>
  );
}
