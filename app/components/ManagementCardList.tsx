import { MANAGEMENT_CARDS_QUERYResult } from '../../sanity.types';
import { ManagementCard } from './ManagementCard';

export function ManagementCardList({
  cards,
}: {
  cards: MANAGEMENT_CARDS_QUERYResult;
}) {
  return (
    <ul className="flex flex-row flex-wrap justify-between md:ml-14 md:mr-4">
      {cards.map((card) => (
        <ManagementCard card={card} key={card.id} />
      ))}
    </ul>
  );
}
