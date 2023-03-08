import { NavLink } from "react-router-dom";
import BackButton from "./BackButton";

function StoryPage() {

  return (
    <div className="flex flex-col grow relative text-white mb-10 rounded-md max-w-[1000px] w-[80%] mt-[80px] md:mt-[130px]">
      <BackButton />
      <p className="mt-5">This is the story page.</p>
      <br/>
      <p>It will show my story and my entreprenuerial journey.</p>
      <br/>
      <p>Still under construction at the moment. 
        Why not
        <NavLink 
          className="hover:underline hover:cursor-pointer px-1 font-semibold text-gray-500" 
          to={"/music"}>
            check out my music
          </NavLink> 
        while you are here?
      </p>
    </div>
  )
}

export default StoryPage;