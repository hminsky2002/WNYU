import { MANAGEMENT_CARDS_QUERYResult } from '../../sanity.types';
import { ManagementCard } from './ManagementCard';

export function ManagementCardList({
  cards,
}: {
  cards: MANAGEMENT_CARDS_QUERYResult;
}) {
  return (
    <ul className="grid w-full auto-rows-fr grid-cols-2 gap-x-6 gap-y-4 md:ml-14 md:flex md:flex-row md:flex-wrap">
      {cards.map((card) => (
        <ManagementCard card={card} key={card.id} />
      ))}
    </ul>
  );
}
