import type { Spin } from '@wnyu/spinitron-sdk';

interface CurrentPlaylistSpinsProps {
  spins?: Spin[];
  dropdown?: boolean;
}
export default function CurrentPlaylistSpinsList({
  spins,
  dropdown = false,
}: CurrentPlaylistSpinsProps) {
  return (
    <div
      className={`mt-8 border-2 ${dropdown ? 'border-white' : 'border-black'} overflow-y-auto`}
    >
      {spins
        ? spins.map((spin) => (
            <div className="border-w mx-2 flex gap-2 border-b" key={spin.id}>
              <div className="w-1/4 flex-shrink-0">
                {new Date(spin.start).toLocaleTimeString()}
              </div>

              <div className="truncate">
                {`${spin.song} - 
                  ${spin.artist}, 
                  ${spin.release}
                  (${spin.label})
                  ${spin.released}`}
              </div>
            </div>
          ))
        : null}
    </div>
  );
}
