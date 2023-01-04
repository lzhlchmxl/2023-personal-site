import React from 'react';
import billAgainstWall from './assets/bill-against-wall.webp'
import billCoding from './assets/bill-coding.webp'
import billPianoHand from './assets/bill-piano-hand.webp'

function App() {

  const typingClassName = `
                          absolute left-10 text-white overflow-hidden whitespace-nowrap 
                          mx-auto my-0 z-10 opacity-0`

  const photosClassName = `w-full h-full max-h-[1500px] max-w-[1000px] saturate-0 object-cover
                            group-hover:saturate-100 transition-all duration-1000 group-hover:cursor-pointer`

  return (
    <div className='flex h-screen items-center justify-center bg-black'>
      <div className="relative flex w-[80%] h-[90%] justify-center">
        <div className={`${typingClassName} top-0 animate-typing1`}>
          <p>Hi, I'm Bill, a Frontend Software Engineer.</p>
        </div>
        <div className={`${typingClassName} top-10 animate-typing2`}>
          <p>Welcome to my personal site :)</p>
        </div>

        {/* left photo */}
        <div className='relative flex justify-center items-center group'>
          <div className='transition-all duration-1000 group-hover:cursor-pointer group-hover:opacity-100 opacity-0 absolute z-50 text-white bg-black/60 py-2 px-3 rounded-md text-2xl whitespace-nowrap'>Aspiring Entreprenuer</div>
          <div className='transition-all duration-1000 group-hover:cursor-pointer group-hover:opacity-100 opacity-0 absolute h-[2px] z-40 bg-white w-[calc(50%-128px)] right-0'></div>
          <img 
            className={`${photosClassName} animate-fadeInFromLeft opacity-0`}
            src={billAgainstWall}
            alt='bill standing against wall'
          />
        </div>

        {/* first dividing line */}
        <div 
          className='relative flex justify-center items-center mx-[5px]'
        >
          <div
            className='absolute bg-white rounded-full w-4 h-4 z-10 border-[3px] border-black'
          ></div>
          <div
            className='animate-wipeDown absolute w-[2px] h-full bg-white z-50 opacity-0'
          ></div>
        </div>

        {/* middle photo */}
        <div className='relative animate-shrink w-[900px] group'>
          <div className='absolute bottom-0 w-full h-1/2'>
            <div className='absolute top-0 w-full h-1/2 flex justify-center items-center'>
              <div className='transition-all duration-1000 group-hover:cursor-pointer group-hover:opacity-100 opacity-0 z-40 absolute left-[-2px] top-[-2px] w-[calc(50%+4px)] h-[calc(50%-22px)] border-[2px] border-white border-b-0 border-l-0'></div>
              <div className='transition-all duration-1000 group-hover:cursor-pointer group-hover:opacity-100 opacity-0 absolute z-50 text-white bg-black/60 py-2 px-3 rounded-md text-2xl whitespace-nowrap'>Front-end Engineer</div>
              <div className='transition-all duration-1000 group-hover:cursor-pointer group-hover:opacity-100 opacity-0 z-40 absolute right-[-2px] bottom-[-2px] w-[calc(50%+4px)] h-[calc(50%-22px)] border-[2px] border-white border-t-0 border-r-0'></div>
            </div>
          </div>
          <img 
            className={`${photosClassName} `}
            src={billCoding}
            alt='bill sit and coding'
          />
        </div>

        {/* second dividing line */}
        <div 
          className='relative mx-[5px] flex justify-center'
        >
          <div className='absolute h-1/2 flex bottom-0 justify-center items-center'>
            <div
              className='absolute bg-white rounded-full w-4 h-4 z-10 border-[3px] border-black'
            ></div>
          </div>
          <div
            className='animate-wipeDown absolute w-[2px] h-full bg-white z-50 bottom-0 opacity-0'
          ></div>
        </div>

        {/* right photo */}
        <div className='relative group'>
          <div className='absolute h-1/2 w-full flex bottom-0 justify-center items-center'>
            <div className='transition-all duration-1000 group-hover:opacity-100 opacity-0 absolute h-[2px] z-40 bg-white w-[calc(50%-98.5px)] left-0'></div>
            <div className='transition-all duration-1000 group-hover:opacity-100 opacity-0 absolute z-50 text-white bg-black/60 py-2 px-3 rounded-md text-2xl whitespace-nowrap'>Piano Enthusiast</div>
          </div>
          <img 
            className={`${photosClassName} animate-fadeInFromRight opacity-0`}
            src={billPianoHand}
            alt='bill playing piano'
          />
        </div>
      </div>
    </div>
  );
}

export default App;
