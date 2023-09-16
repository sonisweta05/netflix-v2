const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-12 text-white bg-gradient-to-r from-black absolute">
      <h1 className="text-6xl font-bold">{title} </h1>
      <p className="py-4 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-white text-black mx-2 p-4 px-8 rounded-lg text-xl hover:bg-opacity-80">
          ▶️Play
        </button>
        <button className="bg-gray-500 text-white mx-2 p-4 px-8 bg-opacity-60 rounded-lg text-xl">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
