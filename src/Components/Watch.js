import React from "react";
import { useSelector } from "react-redux";
import { randomInt } from "../Utils/randomNumber";
// import { YOUTUBE_API_URL } from "../Utils/constants";

const Watch = () => {
  // const [videoKey, setVideoKey] = useState(null);
  const videosData = useSelector(
    (store) => store?.movies?.allNowPlayingMoviesVideos
  );
  if (videosData === null) {
    return;
  }

  const length = videosData?.length;
  const rndInt = randomInt(0, length - 1);
  // console.log(videosData);
  // const getVideosThumbnails = async () => {
  //   const data = await fetch(
  //     "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=Ks-_Mh1QhMc&key=AIzaSyB8jfUtGqDzM4Yr114D-P1UH1niWVXVlW4"
  //   );
  //   const json = await data.json();
  //   // console.log(json?.items[0]?.contentDetails?.snippet?.thumbnails);
  //   console.log(json?.items[0]?.snippet?.thumbnails);
  // };

  return (
    videosData && (
      <div className="absolute bg-black bg-opacity-90 top-0 pt-16 md:pt-[8%] -z-10 w-full">
        <div className="w-full my-2">
          <iframe
            aria-disabled
            className="aspect-video w-full md:w-3/5 mx-auto shadow-2xl"
            src={
              "https://www.youtube.com/embed/" +
              videosData[rndInt]?.key +
              "?&autoplay=1&mute=1&&showInfo=0&loop=1"
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div className="flex w-full  md:flex-row flex-wrap items-center justify-center ">
          {videosData.map((video) => (
            // <img onLoad={} src="" alt="" />
            <iframe
              // onLoad={() => getVideosThumbnails(video.key)}
              aria-disabled
              className="aspect-video m-2 w-2/5 md:w-1/5 shadow-2xl"
              src={"https://www.youtube.com/embed/" + video?.key}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ))}
        </div>
      </div>
    )
  );
};

export default Watch;
