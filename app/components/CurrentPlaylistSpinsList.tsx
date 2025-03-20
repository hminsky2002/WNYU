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
      className={`my-8 border-2 ${dropdown ? 'border-white' : 'border-black'} overflow-y-scroll`}
    >
      {spins
        ? spins.map((spin) => (
            <div className="mx-auto flex gap-2 border-b" key={spin.id}>
              <div className="w-1/6 flex-shrink-0">
                {new Date(spin.start).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </div>

              <div className="">
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
