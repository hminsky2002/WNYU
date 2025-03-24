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
          <h4 className="">{title}</h4>
          <p className="">hosted by {host}</p>
          {start && end && (
            <p className="">
              {start} {' - '}
              {end}
            </p>
          )}
        </Link>
      </div>
    </>
  );
}
