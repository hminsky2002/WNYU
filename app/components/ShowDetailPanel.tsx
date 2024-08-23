import ShowDetail from './ShowDetail';
import type { Show } from '@wnyu/spinitron-sdk';

interface ShowDetailPanelProps {
  show?: Show;
}

export default function ShowDetailPanel({ show }: ShowDetailPanelProps) {
  return (
    <div className="hidden md:flex">
      {show && (
        <div className="fixed border-l-2 border-black bg-white">
          <ShowDetail show={show} />
        </div>
      )}
    </div>
  );
}
