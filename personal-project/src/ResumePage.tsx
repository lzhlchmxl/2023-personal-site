import Carousel from 'nuka-carousel';
import billSmileCoding from './assets/bill-smile-coding.webp';
import ConnectionCircle from './ConnectionCircle';
import SkillCard from './SkillCard';
import { jobInfoData, skillsetsData } from './data';
import JobInfo from './JobInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import logs from "./assets/logs.svg";
import { useWindowDimensions } from './customHooks';

function ResumePage() {

  const { width } = useWindowDimensions();

  const slidesToShow = width > 1280 ? 3 : width > 768 ? 2 : 1;

  return (
    <div className='relative flex flex-col w-[80%] h-[90%] items-center'>
      <h1 className='text-white text-3xl'>Why work with Bill as a Front-end Engineer?</h1>
      <div className='flex flex-col sm:flex-row mt-10 items-center sm:items-stretch'>
        {/* value props left to the image */}
        <div
          className='hidden md:flex flex-col justify-around'
        >
          {/* top left value prop */}
          <div className='translate-y-[-25px] lg:translate-y-0 flex flex-col max-w-[300px]'>
            <p className='text-white mb-1 text-lg'>4 years of modern <span className='text-orange-500 font-semibold'>custom UI</span> experience with web frameworks.</p>
            <div className='flex self-end relative w-2/3'>
              <div className='w-[40px] h-[20px] border-[1px] border-lightGray border-l-0 border-b-0 z-20'></div>
              <ConnectionCircle l='left-[-8px]' t='top-[-8px]'/>
              <div className='grow h-[20px] border-b-[1px] border-lightGray z-20'></div>
              <ConnectionCircle r='right-[-8px]' b='bottom-[-8px]'/>
            </div>
          </div>
          {/* bottom left value prop */}
          <div className='translate-y-[30px] lg:translate-y-0 flex flex-col-reverse max-w-[300px]'>
            <p className='text-white mb-1 text-lg'><span className='text-orange-500 font-semibold'>T</span>est-<span className='text-orange-500 font-semibold'>D</span>riven <span className='text-orange-500 font-semibold'>D</span>evelopment and <span className='text-orange-500 font-semibold'>Type</span>script.</p>
            <div className='flex self-end relative w-1/2'>
              <div className='grow h-[20px] border-[1px] border-lightGray border-r-0 border-b-0 z-20'></div>
              <ConnectionCircle l='left-[-8px]' b='bottom-[-8px]'/>
              <ConnectionCircle r='right-[-8px]' t='top-[-8px]'/>
            </div>
          </div>
        </div>
        {/* center image */}
        <div className='w-[90%] aspect-square sm:w-[200px] lg:w-[400px] overflow-hidden rounded-md'>
          <img 
            src={billSmileCoding}
            alt='Bill smiling and coding'
          />
        </div>
        {/* value props right to the image */}
        <div
        className='hidden md:flex flex-col justify-around'
        >
          {/* top right value prop */}
          <div className='translate-y-[-25px] lg:translate-y-0 flex flex-row-reverse max-w-[300px] items-center'>
            <p className='text-white mb-1 text-lg ml-3'>Product design and <span className='text-orange-500 font-semibold'>feature communications</span> with SME(Subject Matter Expert).</p>
            <div className='flex self-end relative w-1/3 h-1/2'>
              <div className='w-[20px] border-[1px] border-lightGray border-l-0 border-t-0 z-20'></div>
              <ConnectionCircle l='left-[-8px]' b='bottom-[-8px]'/>
              <div className='grow border-t-[1px] border-lightGray z-20'></div>
              <ConnectionCircle r='right-[-8px]' t='top-[-8px]'/>
            </div>
          </div>
          {/* bottom right value prop */}
          <div className='translate-y-[20px] lg:translate-y-0 flex flex-row-reverse max-w-[300px]'>
            <p className='text-white mb-1 text-lg min-w-[165px] whitespace-nowrap flex items-center translate-x-[-70px]'>Client <span className='text-orange-500 font-semibold pl-[5px]'>engagement & relations</span>.</p>
            <div className='flex self-end relative w-3/5'>
              <div className='grow min-w-[10px] border-[1px] border-lightGray border-l-0 border-b-0 z-20'></div>
              <ConnectionCircle l='left-[-8px]' t='top-[-8px]'/>
              <div className='w-[100px] h-[50px] border-[1px] border-lightGray border-r-0 border-t-0 z-20'></div>
              <ConnectionCircle r='right-[-8px]' b='bottom-[-8px]'/>
            </div>
          </div>
        </div>
        {/* all value props right to the image for mobile view */}
        <ul className='flex md:hidden flex-col list-disc text-white text-lg ml-[35px]'>
          <li className='mb-1'>4 years of modern <span className='text-orange-500 font-semibold'>custom UI</span> experience with web frameworks.</li>
          <li className='mb-1'><span className='text-orange-500 font-semibold'>T</span>est-<span className='text-orange-500 font-semibold'>D</span>riven <span className='text-orange-500 font-semibold'>D</span>evelopment and <span className='text-orange-500 font-semibold'>Type</span>script.</li>
          <li className='mb-1'>Product design and <span className='text-orange-500 font-semibold'>feature communications</span> with SME(Subject Matter Expert).</li>
          <li className='mb-1'>Client <span className='text-orange-500 font-semibold pl-[5px]'>engagement & relations</span>.</li>
        </ul>
      </div>
      {/* main content section */}
      <div className='flex flex-col w-[100%] max-w-[1000px] my-10 relative'>
        {/* about me subsection */}
        <div className='text-white absolute top-5 right-0 hover:underline z-30'>
          <a href='https://www.linkedin.com/in/bill-liang' target="_blank" rel='noreferrer' className='capitalize text-gray-500 font-semibold'>linkedin<FontAwesomeIcon className='pl-[8px]' icon={faUpRightFromSquare} /></a>
        </div>
        <div className='flex flex-col md:flex-row justify-between relative'>
          <div className='flex flex-col max-w-full md:max-w-[47%]'>
            <h2 className='text-lightGray font-semibold my-5'>About Me</h2>       
            <div className='z-20 flex flex-col text-white'>
              <p>I'm a growth-centric & goal-driven coder in his late 20s. I live in Kitchener, ON, together with my wife and our little puppy. </p>
              <br />
              <p>
                I've been coding for about seven years. After university, I worked for a local company to build automated internal solutions. 
                Later I moved on and joined a software consulting startup in Ontario. 
                Along this journey, we served clients around the globe across different industries, building modern web solutions while growing as a team.
              </p>
              <br />
              <p>
                Over the years, I found myself with a strong passion for online education and mental health. 
                I'd love to hang out with like-minded people and work on exciting new ideas. 
                Please feel free to send me a message on <a href='https://www.linkedin.com/in/bill-liang' rel='noreferrer' target='_blank' className='hover:underline text-gray-500 font-semibold'>LinkedIn</a>, and start a conversation today!
              </p>
            </div>
          </div>
          <div className='flex flex-col max-w-full md:max-w-[47%] relative'>
            <h2 className='z-20 text-lightGray font-semibold mt-10 mb-5 md:my-5'>My Work Footprints</h2>
            <div className='z-20 flex flex-col'>     
              {
                jobInfoData.map( (data, index) => {
                  return (
                    <JobInfo 
                      key={index}
                      duration={data.duration}
                      jobTitle={data.jobTitle}
                      companyName={data.companyName}
                      companyAddress={data.companyAddress}
                    />
                  )
                })
              }
            </div>
          </div>
          {/* background fireplace */}
          <div className='z-10 bottom-[-40px] flex absolute w-full justify-center'>
            <div className="absolute bottom-[-10px]">
              <img 
                className='blur-[1px] w-[120px] saturate-[0.6]'
                src={logs}
                alt='a pile of wood'
              />
            </div>
            <div
              className='w-[150px] h-[150px] bg-[linear-gradient(-45deg,red,orange)] rounded-[150px] rounded-br-none
                        rotate-[-135deg] blur-[8px] relative shadow-[17px_20px_90px_#700] border-[58px] border-black
                        border-solid border-l-[25px] border-t-[25px] animate-flame saturate-50 scale-[0.5]
                        before:content-[""] before:w-[100px] before:h-[100px] before:block before:absolute before:bg-[linear-gradient(-45deg,red,orange)]
                        before:animate-flameBefore before:scale-[0.6] before:rotate-[-15deg] before:rounded-[100px] before:rounded-br-none before:bottom-[-40px] before:right-[-40px]
                        after:content-[""] after:w-[100px] after:h-[100px] after:block after:absolute after:bg-[linear-gradient(-45deg,red,orange)]
                        after:animate-flameAfter after:scale-[0.6] after:rotate-[20deg] after:rounded-[100px] after:rounded-br-none after:bottom-[-40px] after:right-[-40px]
                        '
            />
          </div>
        </div>

        {/* skillsest subsection */}
        <h2 className='text-lightGray font-semibold mt-10 mb-5'>My Skillsets</h2>
        <Carousel 
          slidesToShow={slidesToShow}
          renderCenterLeftControls={({ previousDisabled }) => (
            <button disabled={previousDisabled}></button>
          )}
          renderCenterRightControls={({ nextDisabled }) => (
            <button  disabled={nextDisabled}></button>
          )}
          defaultControlsConfig={{
            pagingDotsContainerClassName: '!top-[30px]',
            pagingDotsClassName: 'w-[10px]',
            pagingDotsStyle: {
              fill: 'lightGray',
              width: '10px',
              height: '10px',
            },
          }}
        >
          {
            skillsetsData.map( (data, index) => {
              return (
                <SkillCard 
                  key={index}
                  title={data.title}
                  description={data.description}
                  icons={data.icons}
                />
              )
            })
          }
        </Carousel>
        
        {/* contact subsection */}
        <h2 className='text-lightGray font-semibold mt-10 mb-5'>Contact</h2>
        <div className='flex text-lightGray h-[100px]'>
          <p>Want to collaborate on something exciting? <a href='https://www.linkedin.com/in/bill-liang' rel='noreferrer' target='_blank' className='hover:underline text-gray-500 font-semibold px-1'>Connect with me on LinkedIn</a> and let's chat :D </p>
        </div>
      </div>
    </div>
  )
}

export default ResumePage;