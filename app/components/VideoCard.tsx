export default function VideoCard({ videoLink }: { videoLink: string }) {
  return (
    <div>
      <iframe
        className="h-[200px] w-full border-4 border-black md:h-[500px]"
        src={videoLink}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
}
