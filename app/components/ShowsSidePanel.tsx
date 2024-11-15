import ScheduleItem from './ScheduleItem';
import type { Show } from '@wnyu/spinitron-sdk';

const ShowsSidePanel = ({ shows }: { shows: Show[] }) => (
  <div className="">
    {shows.map((show, index) => (
      <ScheduleItem show={show} key={index} />
    ))}
  </div>
);

export default ShowsSidePanel;
