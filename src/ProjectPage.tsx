import BackButton from "./BackButton";
import ProjectCard from "./ProjectCard";
import { projectsData } from "./data";

function ProjectPage() {

  const projectsHTML = projectsData.map( ({ title, description, coverImg, coverImgAlt, demo, codeLink, technologies}) => {
    return (
      <div
        className="relative w-[40%]"
        key={title}
      >
        <ProjectCard 
          title={title}
          description={description}
          coverImg={coverImg}
          coverImgAlt={coverImgAlt}
          codeLink={codeLink}
          demo={demo}
          technologies={technologies}
        />
      </div>
    )
  })

  return (
    <div className="flex flex-col grow w-[80%] items-center relative text-white mb-10 rounded-md max-w-[1000px] mt-[80px] md:mt-[130px]">
      <BackButton />
      <h1 className='text-white text-3xl'>Simple ideas that I had fun building</h1>
      <p className="mt-5">More projects coming soon...</p>  
      <div className="mt-5 flex justify-around">
        { projectsHTML }
      </div>
      <p className="mt-10">
        Have a fun idea and want to collaborate with me?
        Please feel free to message me on <a href='https://www.linkedin.com/in/bill-liang' rel='noreferrer' target='_blank' className='hover:underline text-gray-500 font-semibold'>LinkedIn</a>!
      </p>
      
    </div>
  )
}

export default ProjectPage;