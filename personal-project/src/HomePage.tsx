import { Link } from 'react-router-dom'
import billAgainstWall from './assets/bill-against-wall.webp'
import billCoding from './assets/bill-coding.webp'
import billPianoHand from './assets/bill-piano-hand.webp'
import ConnectionCircle from './ConnectionCircle'
import { useWindowDimensions } from './customHooks'
import { pageSelectionData } from './data'

function HomePage() {

  // * Initial animated typing-like text display *
  // const typingClassName = `
  //                         absolute left-10 text-white overflow-hidden whitespace-nowrap 
  //                         mx-auto my-0 z-10 opacity-0`

  const { width } = useWindowDimensions();

  const photosClassName = `w-full h-full max-h-[1500px] max-w-[1000px] saturate-0 object-cover
                            group-hover:saturate-100 transition-all duration-1000 group-hover:cursor-pointer`

  return (
    // [TODO] improve the code structure to make it cleaner
    <>
      {
        width > 1024 ?
        <div className="relative flex w-[80%] h-[90%] justify-center">
          {/* <div className={`${typingClassName} top-0 animate-typing1`}>
            <p>Hi, I'm Bill, a Frontend Software Engineer.</p>
          </div>
          <div className={`${typingClassName} top-10 animate-typing2`}>
            <p>Welcome to my personal site :)</p>
          </div> */}

          {/* left photo */}
          <Link 
            className='relative flex justify-center items-center group'
            to={'/story'}
          >
            <div className='transition-all duration-1000 group-hover:cursor-pointer group-hover:opacity-100 opacity-0 absolute z-50 text-white bg-black/60 py-2 px-3 rounded-md text-2xl whitespace-nowrap'>Aspiring Entreprenuer</div>
            <div className='transition-all duration-1000 group-hover:cursor-pointer group-hover:opacity-100 opacity-0 absolute h-[2px] z-40 bg-lightGray w-[calc(50%-128px)] right-0'></div>
            <img 
              className={`${photosClassName} animate-fadeInFromLeft opacity-0`}
              src={billAgainstWall}
              alt='bill standing against wall'
            />
          </Link>

          {/* first dividing line */}
          <div 
            className='relative flex justify-center items-center mx-[5px]'
          >
            <ConnectionCircle />
            <div
              className='animate-wipeDown absolute w-[2px] h-full bg-lightGray z-30 opacity-0'
            ></div>
          </div>

          {/* middle photo */}
          <Link
            className='relative animate-shrink w-[900px] group'
            to={'/resume'}
          >
            <div className='absolute bottom-0 w-full h-1/2'>
              <div className='absolute top-0 w-full h-1/2 flex justify-center items-center'>
                <div className='transition-all duration-1000 group-hover:cursor-pointer group-hover:opacity-100 opacity-0 z-40 absolute left-[-2px] top-[-2px] w-[calc(50%+4px)] h-[calc(50%-22px)] border-[2px] border-lightGray border-b-0 border-l-0'></div>
                <div className='transition-all duration-1000 group-hover:cursor-pointer group-hover:opacity-100 opacity-0 absolute z-50 text-white bg-black/60 py-2 px-3 rounded-md text-2xl whitespace-nowrap'>Front-end Engineer</div>
                <div className='transition-all duration-1000 group-hover:cursor-pointer group-hover:opacity-100 opacity-0 z-40 absolute right-[-2px] bottom-[-2px] w-[calc(50%+4px)] h-[calc(50%-22px)] border-[2px] border-lightGray border-t-0 border-r-0'></div>
              </div>
            </div>
            <img 
              className={`${photosClassName} `}
              src={billCoding}
              alt='bill sit and coding'
            />
          </Link>

          {/* second dividing line */}
          <div 
            className='relative mx-[5px] flex justify-center'
          >
            <div className='absolute h-1/2 flex bottom-0 justify-center items-center'>
              <ConnectionCircle />
            </div>
            <div
              className='animate-wipeDown absolute w-[2px] h-full bg-lightGray z-30 bottom-0 opacity-0'
            ></div>
          </div>

          {/* right photo */}
          <Link 
            className='relative group'
            to={'/music'}
          >
            <div className='absolute h-1/2 w-full flex bottom-0 justify-center items-center'>
              <div className='transition-all duration-1000 group-hover:opacity-100 opacity-0 absolute h-[2px] z-40 bg-lightGray w-[calc(50%-98.5px)] left-0'></div>
              <div className='transition-all duration-1000 group-hover:opacity-100 opacity-0 absolute z-50 text-white bg-black/60 py-2 px-3 rounded-md text-2xl whitespace-nowrap'>Piano Enthusiast</div>
            </div>
            <img 
              className={`${photosClassName} animate-fadeInFromRight opacity-0`}
              src={billPianoHand}
              alt='bill playing piano'
            />
          </Link>
        </div>
        :
        <div className='absolute flex flex-col top-[46px] h-[calc(100vh-46px)] justify-between'>
          {
            pageSelectionData.map( (data, index) => {
              return (
                <Link 
                  key={index}
                  className='relative flex group h-[calc(33%-2px)] justify-center'
                  to={data.to}
                >
                  {/* <div className='flex self-center transition-all duration-1000 group-hover:cursor-pointer group-hover:opacity-100 opacity-0 absolute z-50 text-white bg-black/60 py-2 px-3 rounded-md text-2xl capitalize'>{data.text}</div> */}
                  <div className='flex self-center cursor-pointer opacity-100 absolute z-50 text-white bg-black/60 py-2 px-3 rounded-md text-2xl capitalize'>{data.text}</div>
                  <img 
                    // className='w-screen saturate-0 object-cover group-hover:saturate-100 transition-all duration-1000 group-hover:cursor-pointer'
                    className='w-screen object-cover cursor-pointer'
                    src={data.img}
                    alt={data.alt}
                  />
                </Link>
              )
            })
          }
          
        </div>
      }
    </>
  )
}

export default HomePage;