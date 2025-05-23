export default function VideoCard({ videoLink }: { videoLink: string }) {
  return (
    <div>
      <iframe
        className="h-[200px] w-full border-2 border-black md:h-[500px]"
        src={videoLink}
        title="YouTube video player"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
}
