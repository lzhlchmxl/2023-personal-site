import BackButton from "./BackButton";
import ProjectCard from "./ProjectCard";
import { projectsData } from "./data";

function ProjectPage() {

  const projectsHTML = projectsData.map( ({ title, description, coverImg, coverImgAlt, demo, codeLink, technologies}) => {
    return (
      <div
        className="relative w-full md:w-[45%] mt-10"
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
      <div className="flex mt-5 flex-col md:flex-row justify-between flex-wrap">
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