import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function BackButton() {

  const navigate = useNavigate();

  return (
    <FontAwesomeIcon 
      icon={faArrowLeftLong} 
      className="absolute text-white top-[-20px] left-0 hover:cursor-pointer"
      onClick={ () => navigate(-1)}
    />
  )
}

export default BackButton;