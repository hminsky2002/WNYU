import {
  announcementType,
  managementCardType,
  textBlockType,
  videoCardType,
} from './schemaTypes';
import { type SchemaTypeDefinition } from 'sanity';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [textBlockType, managementCardType, announcementType, videoCardType],
};
