import type { Persona, Playlist, SpinsResponse } from '@wnyu/spinitron-sdk';

export default async function Page({
  params,
}: {
  params: { playlistId: string };
}) {
  const playlist = (await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/playlists/${params.playlistId}`,
    {
      cache: 'force-cache',
    },
  ).then((res) => res.json())) as Playlist;
  const spins: SpinsResponse = (await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/spins?playlist_id=${params.playlistId}`,
    {
      cache: 'force-cache',
    },
  ).then((res) => res.json())) as SpinsResponse;
  const persona: Persona = (await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/personas/${playlist.persona_id}`,
    {
      cache: 'force-cache',
    },
  ).then((res) => res.json())) as Persona;

  return (
    <>
      <div className="mx-auto max-w-[80%] px-8">
        <div className="my-2 text-xl font-bold">
          {new Date(playlist.start).toDateString()}
        </div>
        <div className="text-4xl font-extrabold">{playlist.title}</div>
        <div className="text-xl">{`hosted by ${persona.name}`}</div>
        <div className="text-xl">
          {new Date(playlist.start).toLocaleTimeString()} {' - '}
          {new Date(playlist.end).toLocaleTimeString()}
        </div>
      </div>
      <div className="mx-auto my-8 flex max-w-[80%] flex-col gap-y-4 text-xl">
        {spins.items &&
          spins.items.map((spin, index) => (
            <div className="border-w mx-2 flex gap-2" key={spin.id}>
              <div>{index + 1}.</div>
              <div>
                {`${spin.song} - 
                  ${spin.artist}, 
                  ${spin.release}
                  (${spin.label})
                  ${spin.released}
                  `}
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
