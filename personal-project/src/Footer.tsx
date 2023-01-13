import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";


function Footer() {

  return (
    <div
      className="flex justify-center items-center text-white border-t-[2px] border-lightGray/10 w-full h-[100px]"
    >
      <div className="relative flex justify-center items-center w-[80%] max-w-[1000px]">
        <p>© 2016-2023 Bill Liang</p>
        <a
          className="absolute hover:cursor-pointer right-0"
          href='https://www.linkedin.com/in/bill-liang' target="_blank" rel='noreferrer'
        >
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
      </div>
    </div>
  )
}

export default Footer;