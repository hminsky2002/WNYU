import Link from 'next/link';

interface ListItemProps {
  title: string;
  host: string;
  start?: string;
  end?: string;
  url?: string;
}
export default function ListItem({
  title,
  url,
  host,
  start,
  end,
}: ListItemProps) {
  return (
    <>
      <div className={`cursor-pointer transition-colors hover:text-gray-400`}>
        <Link href={url ? `${url}` : '/'}>
          <div className="text-5xl font-extrabold">{title}</div>
          <div className="text-xl">hosted by {host}</div>
          {start && end && (
            <div className="text-large font-thin">
              {start} {' - '}
              {end}
            </div>
          )}
        </Link>
      </div>
    </>
  );
}
