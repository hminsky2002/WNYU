import Link from 'next/link';
import Stream from './Stream';

export default function Navbar() {
  return (
    <div className="flex flex-col border-b-2 border-gray-500 lg:flex-row">
      <div>
        <Stream />
      </div>
      <div>
        <Link href="/home"> HOME</Link>
        <Link href="/schedule"> SCHEDULE</Link>
        <Link href="/about"> ABOUT</Link>
      </div>
    </div>
  );
}
