import { NavLink } from "react-router-dom";
import BackButton from "./BackButton";

function NotFoundPage() {
  return (
    <div className="flex flex-col grow w-[80%] items-center relative text-white mb-10 rounded-md max-w-[1000px] mt-[80px] md:mt-[130px]">
      <BackButton />
      <h1 className='text-white text-3xl'>404</h1>
      <p className="mt-5">Somehow you got here and I'm not even sure how you did it...</p>
      <p className="mt-5">
        Please double check the URL to make sure it is correct and try to refresh the page.
      </p>
      <p className="mt-5">
         If you are still seeing this page then whatever you were looking for is no longer there.
      </p>
      <p className="mt-5">
        Why not check out my
        <NavLink 
          className="hover:underline hover:cursor-pointer px-1 font-semibold text-gray-500" 
          to={"/projects"}>
             projects
        </NavLink> 
        or my
        <NavLink 
          className="hover:underline hover:cursor-pointer px-1 font-semibold text-gray-500" 
          to={"/music"}>
             music
        </NavLink> 
        while you are here?
      </p>
      
    </div>
  )
}

export default NotFoundPage;