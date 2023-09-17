const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-12 text-white bg-gradient-to-r from-black absolute">
      <h1 className="text-2xl md:text-6xl font-bold">{title} </h1>
      <p className="hidden md:inline-block py-4 text-lg w-1/4">{overview}</p>
      <div className="my-2 md:my-0">
        <button className="bg-white text-black py-1 px-3 mx-2 md:py-4 md:px-8 rounded-lg text-xl hover:bg-opacity-80">
          ▶️Play
        </button>
        <button className="bg-gray-500 hidden md:inline-block text-white mx-2 p-4 px-8 bg-opacity-60 rounded-lg text-xl">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
