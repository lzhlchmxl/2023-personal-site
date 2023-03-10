import ReactPlayer from "react-player";
import BackButton from "./BackButton";
import { useRef, useState } from "react";
import { musicVideos } from "./data";
import billHoldingDog from "./assets/bill_holding_dog_sitting.jpg";
// import billPianoSymmetrical from "./assets/billPianoSymmetrical.webp";
import { faList, faXmark, faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MusicPage() {

  const playerRef = useRef<ReactPlayer>(null);
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [playListOpen, setPlayListOpen] = useState(false);

  return (
    <div className="flex flex-col grow w-[80%] items-center relative text-white mb-10 rounded-md max-w-[1000px] mt-[80px] md:mt-[130px]">
      <BackButton />
      <h1 className='text-white text-3xl'>My Music &#183; Passion and Expression</h1>
      <div
        className="flex mt-10 justify-between w-[100%] relative"
      >
        <div
          className="w-full lg:w-[47%] z-10"
        >
          <ReactPlayer  
            width={'100%'}
            ref={playerRef} 
            controls
            playing={!isFirstVisit && isVideoPlaying}
            url={musicVideos[activeVideoIndex].url} 
            onPlay={() => setIsVideoPlaying(true)}
            onPause={() => setIsVideoPlaying(false)}
            onEnded={() => setPlayListOpen(true)}
          />
        </div>
        <FontAwesomeIcon
          className={`
            hover:bg-opacity-20 bg-white bg-opacity-10 
            flex lg:hidden absolute hover:cursor-pointer w-[16px] h-[16px]
            rounded-full p-2 top-1 sm:top-5 right-1 sm:right-1 z-30 transition-all
          `}
          icon={playListOpen ? faXmark : faList}
          onClick={ () => setPlayListOpen(!playListOpen)}
        />
        <div 
          className={`absolute lg:static
            bg-black w-full h-full ${ playListOpen ? "opacity-90 z-20" : "opacity-0 z-0" }
            flex flex-col items-start lg:w-[47%] lg:opacity-100 transition-all
            pt-3
            `}
        >
          {
            musicVideos.map( (video, index) => {
              return <button
                className={`pl-2 py-2 sm:pl-5 first-of-type:mt-10 select-none w-full text-left 
                  ${ index === activeVideoIndex ? 
                    "bg-white bg-opacity-10" 
                    : 
                    "hover:bg-white hover:bg-opacity-10"
                  }
                `}
                key={video.title}
                onClick={() => {
                  setActiveVideoIndex(index);
                  setIsFirstVisit(false);
                  setIsVideoPlaying(index === activeVideoIndex ? !isVideoPlaying : true);
                }}
              >
                <FontAwesomeIcon 
                  icon={(index === activeVideoIndex && isVideoPlaying) ? faPause : faPlay} 
                  className="pr-2 w-[10px]"
                />
                {`${index + 1}. ${video.title}`}
              </button>
            })
          }
        </div>
      </div>
      <div className='flex items-center overflow-hidden w-full max-w-[1000px] mt-10 flex-col md:flex-row justify-between relative'>
          <div className='flex flex-col max-w-full md:max-w-[47%]'>
            <h2 className='text-lightGray font-semibold my-5'>Side Story</h2>       
            <div className={`z-20 flex flex-col text-white mb-5 `}>
              {/* 
              A text-over background image approach 
              before:flex before:sm:hidden
              before:content-[""] before:h-full before:w-full
              before:absolute before:z-[-10] before:shadow-customImage
              before:bg-[url("./assets/bill-piano-symmetrical.webp")]
              before:bg-cover before:opacity-40
              before:bg-center */}
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
          <div className='mt-5 flex md:mt-0 flex-col max-w-full md:max-w-[47%] relative'>
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