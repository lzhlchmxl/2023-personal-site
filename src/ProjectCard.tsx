import { useState } from "react";
import Modal from 'react-modal';
import ReactPlayer from "react-player";

const customModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    zIndex: '20',
  }
};

export default function ProjectCard({
  title,
  description,
  coverImg,
  coverImgAlt,
  demo,
  codeLink,
  technologies,
}
:
{
  title: string;
  description: string;
  demo: string | null;
  coverImg: string; 
  coverImgAlt: string,
  codeLink: string,
  technologies: {
      frontend: string;
      backend: string;
      database: string;
      hosting: string;
      cicd: string;
  }
}
) {
  
  const [isHover, setIsHover] = useState(false); // cover photo hover control
  const [isModalOpen, setIsModalOpen] = useState(false); // modal control

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const x = e.clientX;
    const {left, width} = e.currentTarget.getClientRects()[0];
    if (x < left + width / 2) { // clicking the 'watch demo' button
      if (demo === null) {
        window.alert('There is no demo video for this project yet.');
      } else {
        setIsModalOpen(true);
      }
    } else { // clicking the 'view code' button
      window.open(codeLink, "_blank");
    }
  }
  
  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <div className="relative min-w-[300px] min-h-[500px] w-full flex flex-col justify-between rounded-md text-white border-lightGray border-[1px] bg-white/10">
      {/* [TODO] cursor should not be pointers when hovering project text, fix if have time */}
      <div className="absolute w-full h-full z-10 cursor-pointer"
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        // [TODO] ehhh I messed up haha, there is gotta be a cleaner way to do this while achieving the sliding effect on hover/tap for both desktop and mobile
        onClick={(e) => 
          {
            if (!isHover) {
              setIsHover(true)
            } else {
              handleClick(e)
            }
          }
        }
      />
      <div className="relative p-5 z-0">
        <div 
          className={`flex absolute w-[calc(50%-1.25rem)] h-[calc(100%-2.5rem)] justify-center items-center transition-all 
                        duration-700 z-50 bg-black/60 border-r-[1px] border-black/10 
                        ${isHover ? "left-[1.25rem] opacity-100" : "left-[-50%] opacity-0"}`}
        >
          <div className='uppercase text-white text-md font-semibold'>watch demo</div>
        </div>
        <div
          className={`flex absolute w-[calc(50%-1.25rem)] h-[calc(100%-2.5rem)] justify-center items-center transition-all 
                      duration-700 z-50 bg-black/60 border-r-[1px] border-black/10
                      ${isHover ? "right-[1.25rem] opacity-100" : "right-[-50%] opacity-0"}`}
        >
          <div className='uppercase text-white text-md font-semibold'>view code</div>
        </div>
        <img 
          className={`transition-all duration-1000 object-cover ${isHover ? 'saturate-0' : 'saturate-100'}`}
          src={coverImg}
          alt={coverImgAlt}
        />
      </div>
      {
        isHover 
        ?
        <>
          <p className="capitalize px-5">Frontend: {technologies.frontend}</p>
          <p className="capitalize px-5">Backend: {technologies.backend}</p>
          <p className="capitalize px-5">Database: {technologies.database}</p>
          <p className="capitalize px-5">Hosting: {technologies.hosting}</p>
          <p className="capitalize px-5 pb-5">CI/CD: {technologies.cicd}</p>
        </>
        :
        <>
          <p className="capitalize px-5"> Title: {title}</p>
          <p className="px-5 pb-5">Description: {description}</p>
        </>
      }
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customModalStyles}
        appElement={document.body}
      >
        <button 
          onClick={closeModal}
          className="pb-3 font-semibold"
        >
            CLOSE
        </button>
        <ReactPlayer  
            width={'100%'}
            controls
            playing
            url={demo ? demo : undefined} 
          />
      </Modal>
    </div>
  )
}