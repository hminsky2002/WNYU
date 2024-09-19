import type { StructureResolver } from 'sanity/structure';
import {
  DocumentTextIcon,
  UsersIcon,
  EyeOpenIcon,
  DocumentVideoIcon,
} from '@sanity/icons';

export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      S.documentTypeListItem('textBlock')
        .title('Text Block')
        .icon(DocumentTextIcon),
      S.documentTypeListItem('managementCard')
        .title('Management Card')
        .icon(UsersIcon),
      S.documentTypeListItem('announcement')
        .title('Announcement')
        .icon(EyeOpenIcon),
      S.documentTypeListItem('videoCard')
        .title('Video Card')
        .icon(DocumentVideoIcon),
    ]);
