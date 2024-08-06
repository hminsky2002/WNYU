'use client';

import Link from 'next/link';

export default function NavMenu() {
  return (
    <div className="flex space-x-4">
      <Link href="/home">HOME</Link>
      <Link href="/schedule">SCHEDULE</Link>
      <Link href="/about">ABOUT</Link>
    </div>
  );
}
