import ShowDetail from './ShowDetail';
import type { Show } from '@wnyu/spinitron-sdk';

interface ShowDetailPanelProps {
  show?: Show;
}

export default function ShowDetailPanel({ show }: ShowDetailPanelProps) {
  return (
    <div>
      {show ? <ShowDetail show={show} /> : 'Select a radio show to see details'}
    </div>
  );
}
