import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

function SkillCard({title, description, icons}: {title: string, description: string, icons: {icon: IconDefinition | string, description: string}[] }) {

  return (
    <div className="flex flex-col justify-between p-5 w-[300px] h-[200px] rounded-md text-white border-lightGray border-[1px] bg-white/10">
      <div className='flex flex-col'>
        <h3 className="font-semibold capitalize">{title}</h3>
        <p>{description}</p>
      </div>
      <div className='flex'>
        {
          icons.map( (icon, index) => {
            return (
              <div 
                className="flex text-3xl group relative"
                key={index}
              >
                <div 
                  className='hidden group-hover:block absolute text-sm rounded-[3px] bg-black py-[3px] px-[6px] top-[-25px]'
                >
                  {icon.description}
                </div>
                {
                  typeof icon.icon === 'string' 
                  ?
                  <img 
                    className='mr-4 w-[25px] rounded-md'
                    src={icon.icon}
                    alt='typescript icon'
                  />
                  :
                  <FontAwesomeIcon 
                    icon={icon.icon} 
                    className='mr-4 w-[25px]'
                  />
                }
              </div>
            )
          })
        } 
      </div>
    </div>
  )

}

export default SkillCard;