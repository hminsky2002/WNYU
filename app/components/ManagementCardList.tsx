import { MANAGEMENT_CARDS_QUERYResult } from '../../sanity.types';
import { ManagementCard } from './ManagementCard';

export function ManagementCardList({
  cards,
}: {
  cards: MANAGEMENT_CARDS_QUERYResult;
}) {
  return (
    <ul className="container mx-auto grid grid-cols-2">
      {cards.map((card) => (
        <ManagementCard card={card} key={card.id} />
      ))}
    </ul>
  );
}
