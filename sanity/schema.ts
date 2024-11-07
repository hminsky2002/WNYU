import {
  announcementType,
  managementCardType,
  textBlockType,
  videoCardType,
  articleType,
} from './schemaTypes';
import { type SchemaTypeDefinition } from 'sanity';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    textBlockType,
    managementCardType,
    announcementType,
    videoCardType,
    articleType,
  ],
};
