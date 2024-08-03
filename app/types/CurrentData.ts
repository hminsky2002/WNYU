import { Playlist, Spin, SpinitronMetadata } from '@wnyu/spinitron-sdk';

interface CurrentData {
  playlist?: Playlist;
  spins?: Spin[];
  metadata?: SpinitronMetadata;
}

export type { CurrentData };
