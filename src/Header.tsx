import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from "react";
import { useWindowDimensions } from "./customHooks";

function Header() {

  const { width } = useWindowDimensions();
  const [menuToggle, setMenuToggle] = useState(false);

  // [TODO] might not be a good use of useEffect
  useEffect( () => {
    if (width > 768 && menuToggle === true) {
      setMenuToggle(false)
    }
  }, [width]); // eslint-disable-line

  const menuIconRef = useRef<HTMLInputElement | null>(null);
  const menuRef = useRef<HTMLInputElement | null>(null);

  document.addEventListener('mousedown', (e) => {
    if(menuToggle === true 
      && e.target instanceof Element 
      && (!menuIconRef.current?.contains(e.target) && !menuRef.current?.contains(e.target))
    ){
      setMenuToggle(false)
    }
  });

  const { pathname } = useLocation();

  return (
    <div className={`${ pathname === '/' ? 'absolute top-0' : 'fixed md:h-[80px]' }  h-[45px] z-[999] top-0 flex w-full justify-center items-center capitalize text-white`}>
      <div className='flex w-full justify-center items-center z-50 bg-black h-full'>
        <div className={`relative flex justify-between items-center w-[80%] ${ pathname === '/' ? '' : 'max-w-[1000px]' } `}> 
          {/* <a href='https://www.linkedin.com/in/bill-liang' target="_blank" rel='noreferrer'>bill l.</a> */}
          <NavLink to={'/'} >bill l.</NavLink>
          <div className={`${ pathname === '/' ? 'md:hidden' : '' } hidden md:flex`}>
            <NavLink to={'/'} className='hover:underline' >home</NavLink>
            <NavLink to={'/projects'} className='ml-5 hover:underline'>projects</NavLink>
            <NavLink to={'/resume'} className='ml-5 hover:underline'>resume</NavLink>
            <NavLink to={'/music'} className='ml-5 hover:underline'>music</NavLink>
          </div>
          {/* menu bar icon */}
          <div 
            ref={menuIconRef}
            className={`${ pathname === '/' ? 'md:flex' : 'md:hidden' } flex hover:cursor-pointer hover:bg-lightGray/20 w-[30px] aspect-square justify-center items-center ${ menuToggle ? 'bg-lightGray/20':'bg-transparent'}`}
            onClick={ () => { setMenuToggle(!menuToggle) }}
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </div>
      <div className={`h-[1px] bg-white/25 absolute w-full bottom-[-1px] z-50`}></div>
      {/* collapsible menu for small screens */}
      <div 
        className={`absolute flex flex-col w-full transition-all ${menuToggle ? 'top-[45px]' : 'top-[-90px]'} bg-black z-40`}
        ref={menuRef}
        onClick={ () => setMenuToggle(false)}
      >
        <NavLink to={'/'} className='hover:bg-lightGray/20 pb-1 pt-2' ><span className="ml-[10%]">home</span></NavLink>
        <NavLink to={'/projects'} className='hover:bg-lightGray/20 py-1'><span className="ml-[10%]">projects</span></NavLink>
        <NavLink to={'/resume'} className='hover:bg-lightGray/20 py-1'><span className="ml-[10%]">resume</span></NavLink>
        <NavLink to={'/music'} className='hover:bg-lightGray/20 py-1 border-b-[1px] border-lightGray/10'><span className="ml-[10%]">music</span></NavLink>
      </div>
    </div>
  )
}

export default Header;