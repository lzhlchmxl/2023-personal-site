import { Link, useNavigate } from 'react-router-dom'
import billAgainstWall from './assets/bill-against-wall.webp'
import billCoding from './assets/bill-coding.webp'
import billPianoHand from './assets/bill-piano-hand.webp'
import { isMobile } from './utilities'
import ConnectionCircle from './ConnectionCircle'
import { useWindowDimensions } from './customHooks'
import { pageSelectionData } from './data'
import OpenToWorkLabel from './OpenToWorkLabel'

function HomePage() {

  const { width } = useWindowDimensions();
  const navigate = useNavigate();

  const photosClassName = `w-full h-full max-h-[1500px] max-w-[1000px] saturate-0 object-cover
                            group-hover:saturate-100 transition-all duration-1000 group-hover:cursor-pointer`

  return (
    // [TODO] improve the code structure to make it cleaner
    <>
      {
        width > 1024 ?
        <div className="relative flex w-[80%] h-[90%] justify-center">
          {/* left photo */}
          <Link 
            className='relative flex justify-center items-center group'
            to={'/projects'}
          >
            <div className='transition-all duration-1000 group-hover:cursor-pointer group-hover:opacity-100 opacity-0 absolute z-50 text-white bg-black/60 py-2 px-3 rounded-md text-2xl whitespace-nowrap'>Idea Builder</div>
            <div className='transition-all duration-1000 group-hover:cursor-pointer group-hover:opacity-100 opacity-0 absolute h-[2px] z-40 bg-lightGray w-[calc(50%-75px)] right-0'></div>
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
            <OpenToWorkLabel />
            <div className='absolute bottom-0 w-full h-1/2'>
              <div className='absolute top-0 w-full h-1/2 flex justify-center items-center'>
                <div className='transition-all duration-1000 group-hover:cursor-pointer group-hover:opacity-100 opacity-0 z-40 absolute left-[-2px] top-[-2px] w-[calc(50%+4px)] h-[calc(50%-22px)] border-[2px] border-lightGray border-b-0 border-l-0'></div>
                <div className='transition-all duration-1000 group-hover:cursor-pointer group-hover:opacity-100 opacity-0 absolute z-50 text-white bg-black/60 py-2 px-3 rounded-md text-2xl whitespace-nowrap'>Full Stack Developer</div>
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
        <div 
          className='absolute flex flex-col top-[45px] h-[calc(100%-45px)] justify-between overflow-hidden'
        >
          {
            pageSelectionData.map( (data, index) => {
              return (
                <div
                  tabIndex={index}
                  key={index}
                  className='relative flex group h-[calc(33%-2px)]'
                  onClick={ (e) => {
                    e.currentTarget.focus();
                  }}
                >
                  {    
                    isMobile() 
                    ?
                    <>
                      <div 
                        onClick={() => {
                          navigate(data.to)
                        }}
                        className='flex absolute w-[50vw] h-full justify-center items-center transition-all 
                                      duration-700 left-[-50%] group-focus:left-0 z-50 bg-lightGray/10 border-r-[1px] border-black/10'
                      >
                        <div className='uppercase text-white text-md font-semibold'>view</div>
                      </div>
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          e.currentTarget.parentElement?.blur();
                        }}  
                        className='flex absolute w-[50vw] h-full justify-center items-center transition-all 
                                      duration-700 right-[-50%] group-focus:right-0 z-50 bg-lightGray/10 border-l-[1px] border-black/10'
                      >
                        <div className='uppercase text-white text-md font-semibold'>cancel</div>
                      </div>
                      <Link 
                        key={index}
                        className='flex h-full justify-center'
                        to={data.to}
                        onClick={ (e) => {
                          e.preventDefault();
                        }}
                      >
                        {index === 1 && <OpenToWorkLabel />}
                        <div className={`opacity-100 self-center cursor-pointer group-focus:opacity-0 absolute z-40 text-white bg-black/60 py-2 px-3 rounded-md text-2xl capitalize transition-all duration-500`}>{data.text}</div>
                        <img 
                          className={`saturate-0 transition-all duration-1000 w-screen object-cover cursor-pointer group-focus:saturate-100 `}
                          src={data.img}
                          alt={data.alt}
                        />
                      </Link>
                    </>
                    :        
                    <Link 
                      className='relative flex justify-center'
                      to={data.to}
                    >
                      {index === 1 && <OpenToWorkLabel />}
                      <div className={`opacity-0 self-center cursor-pointer group-hover:opacity-100 absolute z-50 text-white bg-black/60 py-2 px-3 rounded-md text-2xl capitalize transition-all duration-500`}>{data.text}</div>
                      <img 
                        className={`saturate-0 transition-all duration-700 w-screen object-cover cursor-pointer group-hover:saturate-100 `}
                        src={data.img}
                        alt={data.alt}
                      />
                    </Link>
                  }
                </div>
              )
            })
          }
          
        </div>
      }
    </>
  )
}

export default HomePage;