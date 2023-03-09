import { NavLink } from "react-router-dom";
import BackButton from "./BackButton";

function ProjectPage() {

  return (
    <div className="flex flex-col grow w-[80%] items-center relative text-white mb-10 rounded-md max-w-[1000px] mt-[80px] md:mt-[130px]">
      <BackButton />
      <h1 className='text-white text-3xl'>Simple ideas that I had fun building</h1>
      <p className="mt-5">More projects coming soon...</p>


      <p>
        Over the years, I found myself with a strong passion for online education and mental health. 
        I'd love to hang out with like-minded people and work on exciting new ideas. 
        Please feel free to send me a message on <a href='https://www.linkedin.com/in/bill-liang' rel='noreferrer' target='_blank' className='hover:underline text-gray-500 font-semibold'>LinkedIn</a>, and start a conversation today!
      </p>
      
    </div>
  )
}

export default ProjectPage;