'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import type { ANNOUNCEMENTS_QUERYResult } from '../../sanity.types';
import 'swiper/css';

export function AnnouncementsCarousel({
  announcements,
}: {
  announcements: ANNOUNCEMENTS_QUERYResult;
}) {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      className="h-[200px] w-[400px] border-4 border-black md:h-full md:w-full"
    >
      {announcements.map((announcement) => (
        <SwiperSlide key={announcement.subtitle} className="relative">
          <Image
            src={urlFor(announcement?.announcementImage?.asset?._ref || '')
              .width(300)
              .height(300)
              .url()}
            fill
            className={`object-cover`}
            alt={announcement.title || ''}
          />
          <div className="absolute bottom-0 h-1/3 w-full bg-black text-white md:h-1/5">
            <div className="mx-2 my-2 md:mx-4 md:my-4">
              <div className="text-xl font-extrabold md:text-4xl">
                {announcement.title}
              </div>
              <div className="text-sm md:text-lg">{announcement.subtitle}</div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
