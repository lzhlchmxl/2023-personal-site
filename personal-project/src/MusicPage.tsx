import ReactPlayer from "react-player";
import BackButton from "./BackButton";
import { useRef, useState } from "react";
import { videos } from "./data";
import billHoldingDog from "./assets/bill_holding_dog_sitting.jpg";
// import billPianoSymmetrical from "./assets/bill-piano-symmetrical.webp";

function MusicPage() {

  const playerRef = useRef<ReactPlayer>(null);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  // const handleSeek = () => {
  //   if(playerRef.current) {
  //     playerRef.current.seekTo(25);
  //   }
  // };

  return (
    <div className="flex flex-col w-[80%] items-center relative text-white mb-10 rounded-md max-w-[1000px] mt-[80px] md:mt-[130px]">
      <BackButton />
      <h1 className='text-white text-3xl'>My Music &#183; Passion and Expression</h1>
      <div
        className="flex mt-10 justify-between w-[100%]"
      >
        <ReactPlayer  
          ref={playerRef} 
          controls 
          url={videos[activeVideoIndex].url} 
          // onReady={handleSeek}
        />
        <div className="flex flex-col items-start">
          {
            videos.map( (video, index) => {
              return <button
                className="hover:underline"
                key={video.title}
                onClick={() => setActiveVideoIndex(index)}
              >
                {`${index + 1}. ${video.title}`}
              </button>
            })
          }
        </div>
      </div>
      <div className='flex items-center overflow-hidden w-full max-w-[1000px] mt-10 flex-col md:flex-row justify-between relative'>
          <div className='flex flex-col max-w-full md:max-w-[47%]'>
            <h2 className='text-lightGray font-semibold my-5'>Side Story</h2>       
            <div className='z-20 flex flex-col text-white mb-5 
              before:flex before:sm:hidden
              before:content-[""] before:h-full before:w-full
              before:absolute before:z-[-10] before:shadow-customImage
              before:bg-[url("./assets/bill-piano-symmetrical.webp")]
              before:bg-cover before:opacity-40
              before:bg-center
            '>
              <p>When I was a young child, I had this "mission" to spread more music in the world. </p>
              <br />
              <p>
                I would pause middle of where I was going and play any piano I came across.
                It didn't matter if it was in a classroom, a supermarket, a music shop, a bar, or a street piano 
                – to me, each one had its own story to tell.

                I would try to feel the emotions and imagine the story of each piano, and then let my fingers do the "talking".
                I used to say that I was "just a medium, letting out the sound of the piano itself." 
              </p>
              <br />
              <p>
                While I now realize that it might be a bit silly, I still cherish every moment of it.
              </p>
            </div>
          </div>
          <div className='hidden mt-5 sm:flex md:mt-0 flex-col max-w-full md:max-w-[47%] relative'>
            <img
              className="drop-shadow-md"
              src={billHoldingDog}
              alt="bill sitting while holding dog during a music festival"
            />
          </div>
        </div>
    </div>
  )
}

export default MusicPage;