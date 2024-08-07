import {
  announcementType,
  managementCardType,
  textBlockType,
} from './schemaTypes';
import { type SchemaTypeDefinition } from 'sanity';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [textBlockType, managementCardType, announcementType],
};
