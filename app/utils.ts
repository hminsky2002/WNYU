import type { ShowsResponse } from '@wnyu/spinitron-sdk';

function trimSpinitronDescriptionString(s: string) {
  try {
    const val = s.slice(3, -4);
    return val;
  } catch (err) {
    return '';
  }
}

function filterShowByCategory(shows: ShowsResponse, category: string) {
  return shows.items.filter((show) => show.category === category);
}

export { trimSpinitronDescriptionString, filterShowByCategory };
