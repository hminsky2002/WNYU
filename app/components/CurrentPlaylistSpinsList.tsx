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
      className={`mt-8 border-4 ${dropdown ? 'border-white' : 'border-black'} overflow-y-auto`}
    >
      {spins
        ? spins.map((spin) => (
            <div className="border-w mx-2 flex gap-2 border-b" key={spin.id}>
              <div className="w-1/4">
                {new Date(spin.start).toLocaleTimeString()}
              </div>

              <div>
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
